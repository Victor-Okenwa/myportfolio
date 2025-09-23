import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const BackTop = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Button
            className="fixed -bottom-[30px] transition-all duration-200 ease-in hover:bottom-[30px] right-4 bg-gradient-to-r from-blue-500 to-pink-500 text-secondary uppercase -rotate-90 text-[8px] [&>svg]:size-5 cursor-pointer" onClick={handleScrollTop}>
            Back To Top
            <ArrowRight />
        </Button>
    )
}

export default BackTop;