import { useApp } from '@/context/app-provider'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils';

const BackTop = () => {
    const { currentSection } = useApp();
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Button
            className={cn("fixed -bottom-[30px] transition-all duration-200 ease-in hover:bottom-[30px] right-[0.01%] bg-gradient-to-r from-blue-700 to-pink-600 text-primary uppercase -rotate-90 text-[8px] [&>svg]:size-5 cursor-pointer", {
                "opacity-0 pointer-events-none": currentSection === 'home',
                "opacity-100": currentSection !== 'home'
            })}
            onClick={handleScrollTop}>
            Back To Top
            <ArrowRight />
        </Button>
    )
}

export default BackTop;