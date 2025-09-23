import { createContext, useContext, useEffect, useState, type JSX, type ReactNode } from "react";

interface AppContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    scrollPosition: number;
    setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
    handlePreload: () => void;
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
    // Add other methods/values to context interface
}


interface AppProviderProps {
    children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: AppProviderProps): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentSection, setCurrentSection] = useState("home");

    function handlePreload() {
        setTimeout(() => {
            setIsLoading(false);
        }, 1050);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionId = section.getAttribute('id');
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    setCurrentSection(String(sectionId));
                }
            });

            setScrollPosition(scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const value: AppContextType = {
        isLoading,
        setIsLoading,
        scrollPosition,
        setScrollPosition,
        handlePreload,
        currentSection,
        setCurrentSection,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp must be used within a AppProvider");
    }
    return context;
};