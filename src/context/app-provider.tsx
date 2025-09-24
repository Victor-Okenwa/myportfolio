import { createContext, useContext, useEffect, useState, type JSX, type ReactNode } from "react";

interface AppContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
    // Add other methods/values to context interface
}


interface AppProviderProps {
    children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: AppProviderProps): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentSection, setCurrentSection] = useState("home");

    useEffect(() => {
        setIsLoading(false);
        window.addEventListener("DOMContentLoaded", () => handleLoad());
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        return () => {
            window.removeEventListener("DOMContentLoaded", handleLoad);
        };
    }, []);

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
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const value: AppContextType = {
        isLoading,
        setIsLoading,
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