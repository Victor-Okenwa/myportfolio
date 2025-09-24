import { useApp } from "@/context/app-provider";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const Preloader = () => {

  const { isLoading, setIsLoading } = useApp();

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    });
  }, []);

  return (
    <div className={cn("bg-background/60 fixed z-50 h-screen w-screen top-0 left-0 flex items-center justify-center opacity-100 transition-all duration-500 ease-out backdrop-blur-md", { "opacity-0 hidden": !isLoading })} >
      <span className="preloader"></span>
    </div>
  )
}

export default Preloader