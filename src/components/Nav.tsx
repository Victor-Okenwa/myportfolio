import { cn } from '@/lib/utils';
import { Briefcase, HomeIcon, MenuIcon, PhoneCallIcon, QuoteIcon, XIcon } from "lucide-react"
import { useApp } from '@/context/app-provider';
import { Button } from './ui/button';
import { useState } from 'react';

const Nav = () => {
    const { currentSection, setCurrentSection } = useApp();
    const [navToggle, setNavToggle] = useState(false);
    const handleNavToggle = () => {
        navToggle ? setNavToggle(false) : setNavToggle(true);
    }

    return (
        <nav className="w-full flex justify-end md:pr-10 fixed top-0 z-40">
            <div className={cn("px-4 relative py-2 rounded-s-md max-w-lg w-fit flex", { "bg-primary-foreground/50 backdrop-blur-lg": currentSection !== 'home' })}>

                <div className="max-md:block md:hidden mr-4">
                    <Button variant={"ghost"} className="size-fit [&>svg]:size-6" onClick={handleNavToggle}>
                        <MenuIcon className={cn("transition-transform duration-300 rotateIcon", { "opacity-0 hidden rotateIcon": navToggle })} />
                        <XIcon className={cn("transition-transform duration-300 rotateIcon", { "opacity-0 rotateIcon hidden": !navToggle })} />
                    </Button>
                </div>

                <div className={cn("max-md:absolute w-full max-md:h-screen max-md:py-4 transition-all ease-in-out duration-700 max-md:-right-[300px] max-md:top-[60px] max-md:bg-background ", { "max-md:-right-0": navToggle })}>
                    <ul className="flex max-md:flex-col max-md:gap-5 text-sm [&>li>a]:overflow-hidden [&>li>a]:capitalize [&>li>a]:px-2 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:flex-col [&>li>a>svg]:size-6 [&>li>a>svg]:text-foreground/90 [&>li>a>span]:bg-gradient-to-r [&>li>a>span]:from-blue-500 [&>li>a>span]:to-pink-500 [&>li>a>span]:text-transparent [&>li>a>span]:bg-clip-text [&>li>a>span]:inline-block">
                        <li className="">
                            <a href='#home'
                                className={cn(" [&>*]:transition-transform [&>*]:ease-linear [&>*]:duration-300 [&>:*]delay-75",
                                    { "[&>span]:translate-y-[100%] [&>svg]:translate-y-[50%]": currentSection === 'home' })}
                                onClick={() => setCurrentSection('home')}>
                                <HomeIcon />
                                <span>home</span>
                            </a>
                        </li>
                        <li className="">
                            <a href='#about'
                                className={cn(" [&>*]:transition-transform [&>*]:ease-linear [&>*]:duration-300 [&>:*]delay-75",
                                    { "[&>span]:translate-y-[100%] [&>svg]:translate-y-[50%]": currentSection === 'about' })}
                                onClick={() => setCurrentSection('about')}>
                                <QuoteIcon />
                                <span className="">about</span>
                            </a>
                        </li>

                        <li className="">
                            <a href='#portfolio'
                                className={cn(" transition-all duration-300 ease-in-out",
                                    { "[&>span]:translate-y-[100%] [&>svg]:translate-y-[50%] [&>*]:transition-transform [&>*]:ease-linear [&>*]:duration-300 [&>:*]delay-75": currentSection === 'portfolio' })}
                                onClick={() => setCurrentSection('portfolio')}>
                                <Briefcase />
                                <span>portfolio</span>
                            </a>
                        </li>
                    </ul>
                </div >
            </div>
        </nav >
    )
}

export default Nav