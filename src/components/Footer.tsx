import { faFacebookF, faFacebookSquare, faGithub, faLinkedin, faLinkedinIn, faUpwork, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './ui/button';
import { Lightbulb, MailIcon } from 'lucide-react';
const Footer = () => {
    const today = new Date();
    return (
        <footer className="relative bg-gradient-to-r from-black to-slate-900 px-4 py-14 border-t-2 ">
            <div className=" absolute flex items-center justify-center [&>svg]:size-9 -top-6 shadow-sm shadow-slate-200 size-12 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 up-down-continuous">
                <Lightbulb />
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col max-w-sm">
                    <h1 className="text-xl sm:text-2xl mb-3">Have an idea? Let's turn it into reality.</h1>
                    <p className="text-sm sm:text-md text-primary/70">Whether it's a new product, a fresh website, or a challenging problem to solve, I'm here to help. Drop me a line and let's start a conversation.</p>
                    <Button variant={"ghost"} className="py-3 px-6 flex justify-start cursor-pointer mt-4 text-sm sm:text-md rounded-full bg-gradient-to-r from-blue-600 to-pink-600 size-fit" asChild>
                        <a target="_blank" href="mailto:okenwavictor003@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Victor,">
                            <span><MailIcon /></span> okenwavictor003@gmail.com
                        </a>
                    </Button>
                </div>

                <div className="flex gap-2">
                    <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-0.5 rounded-full">
                        <Button asChild
                            className="bg-black text-white hover:bg-primary-foreground flex py-1 px-3 justify-start cursor-pointer rounded-full">
                            <a target="_blank" href="https://facebook.com/victorrk.okenwa">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </Button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-0.5 rounded-full">
                        <Button asChild
                            className="bg-black text-white hover:bg-primary-foreground flex py-1 px-3 justify-start cursor-pointer rounded-full">
                            <a target="_blank" href="https://x.com/morse_code_001">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                        </Button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-0.5 rounded-full">
                        <Button asChild
                            className="bg-black text-white hover:bg-primary-foreground flex py-1 px-3 justify-start cursor-pointer rounded-full">
                            <a target="_blank" href="https://www.linkedin.com/in/victor-okenwa">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </Button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-0.5 rounded-full">
                        <Button asChild
                            className="bg-black text-white hover:bg-primary-foreground flex py-1 px-3 justify-start cursor-pointer rounded-full">
                            <a target="_blank" href="https://github.com/Victor-Okenwa">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>


            {/* <div className="socials">
                <a href="https://facebook.com/victorrk.okenwa" rel='noreferrer' target="_blank" className="link"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href="https://www.linkedin.com/in/victor-okenwa-003955285/" rel='noreferrer' target="_blank" className="link"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://upwork.com/freelancers/~01adc42e4a7b01f135" rel='noreferrer' target="_blank" className="link"><FontAwesomeIcon icon={faUpwork} /></a>
            </div>
            <p>All Rights Reserved &copy; {today.getFullYear()}</p>
            <b>Made with <FontAwesomeIcon color='red' icon={faHeart} /> by @okenwavictor</b> */}
        </footer>
    )
}

export default Footer;