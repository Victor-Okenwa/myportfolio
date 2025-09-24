import { useEffect, useRef } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typed from 'typed.js';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronDownCircleIcon, FileBadge2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Designer', 'Developer', 'Programmer', 'Engineer', 'Creator', 'Freelancer'],
      showCursor: false,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const today = new Date();
  const experience = today.getFullYear() - 2021;

  return (
    <main className="overflow-x-hidden">
      <section id='home' className="relative min-h-screen w-screen bg-cover bg-center bg-fixed bg-[url('/images/codingman2.jpg')]">
        <div className="absolute top-0 bottom-0 bg-primary-foreground/80 backdrop-blur-xs w-full min-h-screen"></div>
        <div className="text-center px-[0.6px] absolute w-[95%] h-full flex justify-center items-center flex-col">
          <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block" data-aos="slide-down">Hi, I am Victor</h1>
          <div className="text-2xl md:text-3xl mt-2 text-secondary-foreground/80" data-aos="slide-up">
            <span className="" ref={el}></span>
            <span className="animate-caret-blink">|</span>
          </div>
        </div>
      </section>

      <section id="about" className="px-2 sm:px-4 py-24 moving-grid bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_0.7px,transparent_1px)] bg-[size:290px_260px] bg-repeat">
        <div className="text-3xl md:text-5xl text-center relative flex flex-col justify-center items-center gap-1">
          <h2>A LITTLE <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block">ABOUT</span> ME</h2>
          <span className="h-0.5 max-w-md min-w-sm bg-gradient-to-r py-0.5 from-blue-600 to-pink-600 opacity-50"></span>
          <span className="max-sm:hidden absolute rounded-full rounded-tr-none size-7 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 right-[18.5%]" data-aos="flip-up"></span>
        </div>
        <div className="text-sm sm:text-md text-center mt-5 text-secondary-foreground/80 max-w-3xl mx-auto" data-aos="fade-up">
          <p>
            A Software Engineer with {experience}+ years experience that doesn't just build for clients but for other developers.
            He loves making an impact on any project, building products that are not just functional but also user friendly. A developer that is always eager to learn new technologies and improve on existing ones. A developer that loves to solve problems and make things work.
            A developer that loves to work in a team and also loves to work alone. A developer that is always ready to take on new challenges and learn new things.
          </p>
        </div>

        <div className="mt-5">
          <p className='text-center text-2xl'>I also offer amazing things to clients.</p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-10">
          <Card className="bg-transparent border border-primary/30 shadow-md shadow-accent-foreground/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block"
                data-aos="slide-right">Lightning-Fast Development</CardTitle>
            </CardHeader>
            <CardContent className='text-right font-aladin' data-aos="slide-left" data-aos-delay="200">
              Accelerate Your Vision into Reality
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-primary/30 shadow-md shadow-accent-foreground/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block"
                data-aos="slide-right">Performance and Scalability</CardTitle>
            </CardHeader>
            <CardContent className='text-right' data-aos="slide-left" data-aos-delay="200">
              Built to Grow with Your Business
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-primary/30 shadow-md shadow-accent-foreground/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block"
                data-aos="slide-right">Seamless User Experience (UX)</CardTitle>
            </CardHeader>
            <CardContent className='text-right' data-aos="slide-left" data-aos-delay="200">
              Intuitive and Engaging Interfaces
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-primary/30 shadow-md shadow-accent-foreground/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block"
                data-aos="slide-right">Robust Back-End Architecture</CardTitle>
            </CardHeader>
            <CardContent className='text-right' data-aos="slide-left" data-aos-delay="200">
              Secure and Reliable Back-End
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-primary/30 shadow-md shadow-accent-foreground/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block"
                data-aos="slide-right">Modern Tech Stack Expertise</CardTitle>
            </CardHeader>
            <CardContent className='text-right' data-aos="slide-left" data-aos-delay="200">
              Leveraging the Latest Technology
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-primary/30 shadow-md shadow-accent-foreground/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block"
                data-aos="slide-right">API Integration and Development</CardTitle>
            </CardHeader>
            <CardContent className='text-right' data-aos="slide-left" data-aos-delay="200">
              Effortless Integration and Connection
            </CardContent>
          </Card>
        </div>
      </section>

      <section id='portfolio' >

        <div className="relative h-[60vh] bg-center bg-cover pt-20 bg-fixed bg-[url('/images/codinghand.jpg')]">
          <div>
            <div className="absolute top-0 h-[60.4vh] w-full z-0  bg-gradient-to-b from-background/60 to-black"></div>
            <div className="absolute w-full flex flex-col justify-center items-center">
              <div className="px-2 mb-2">
                <h2 className="text-xl text-center">Want to know more about me and my experience?</h2>
              </div>
              <div className="flex gap-2">
                <Button asChild>
                  <a
                    href="https://github.com/Victor-Okenwa"
                    className='text-secondary-foreground bg-gradient-to-r from-blue-700 to-pink-600'
                    data-aos="slide-right"
                    target='_blank'
                    rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    View GitHub
                  </a>
                </Button>

                <Button
                  asChild
                  variant={"outline"}
                  className="cursor-pointer bg-transparent outline-2"
                  data-aos="slide-left">
                  <a
                    href="/My Resume (Victor Okenwa).pdf"
                    download="My Resume (Victor Okenwa).pdf"
                    className='flex items-center gap-2 text-secondary-foreground'
                  >
                    <FileBadge2 />
                    Download CV
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl w-full bg-black/80">
                    <DialogHeader>
                      <DialogTitle>My Resume</DialogTitle>
                      <DialogDescription className='sr-only'>my resume</DialogDescription>
                    </DialogHeader>

                    <div className="h-60vh overflow-y-auto">
                      <object
                        data="/My Resume (Victor Okenwa).pdf"
                        type="application/pdf"
                        width="100%"
                        height="100px"
                      >
                        <p>
                          Your browser does not support PDFs. <br />
                          <a href="your-document.pdf">Download the PDF</a> instead.
                        </p>
                      </object>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <ChevronDownCircleIcon className="up-down-continuous absolute rounded-full bottom-0 left-[45%] md:left-[47.98%] size-10 md:size-16" />
        </div>

        <div className="w-full pt-12 pb-36 px-4 moving-grid bg-center bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_0.7px,transparent_1px)] bg-[size:290px_260px] bg-repeat">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block uppercase">Some Of My Recent Personal Projects</h2>
          </div>

          <div className="flex flex-col gap-14 mt-10">
            <div className="flex max-md:flex-col justify-between items-center gap-4">
              <img src="/images/react-smart-snippets.jpg"
                data-aos="slide-right"
                className="rounded-md w-full md:w-[50%] h-[400px] object-cover"
                alt="react next js smart snippets" />

              <div className="flex flex-col max-w-xl" data-aos="slide-left" data-aos-delay="200">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 drop-shadow-lg drop-shadow-violet-400">React Smart Snippets</h3>
                <p className="text-secondary-foreground/70 mb-4 text-sm sm:text-md md:text-lg">
                  A collection of reusable React and Next JS components and hooks designed to streamline development with context awareness and enhance developer experience.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 rounded-full bg-blue-500 w-fit">Typescript</span>
                  <span className="px-2 py-1 rounded-full bg-yellow-400 w-fit text-secondary">JavaScript</span>
                  <span className="px-2 py-1 rounded-full bg-blue-600 w-fit">VSIX</span>
                </div>

                <div className="flex gap-2 flex-wrap mt-7">
                  <Button asChild className="flex-1 text-white py-6 rounded-full bg-gradient-to-r from-blue-700 to-pink-600">
                    <a target="_blank" href="https://github.com/Victor-Okenwa/react-next-js-snippets">View Source code</a>
                  </Button>
                  <Button asChild variant={"outline"} className="flex-1 py-6 bg-transparent rounded-full ">
                    <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=morse-code.react-next-js-smart-snippets">Visit Marketplace</a>
                  </Button>
                </div>
              </div>

            </div>

            <div className="flex max-md:flex-col justify-between items-center gap-4">
              <img src="/images/everno.png"
                data-aos="slide-right"
                className="rounded-md w-full md:w-[50%] h-[300px] object-"
                alt="everno" />

              <div className="flex flex-col max-w-xl" data-aos="slide-left" data-aos-delay="200">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 drop-shadow-lg drop-shadow-violet-400">Everno</h3>
                <p className="text-secondary-foreground/70 mb-4 text-sm sm:text-md md:text-lg">
                  An interactive data visualization dashboard aimed at simplifying the use of dashboard and visualization tools by giving you the needed and most basic features.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-black shadow-sm shadow-slate-600 w-fit">Next Js</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-blue-500 w-fit">Typescript</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-yellow-400 w-fit text-secondary">JavaScript</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-purple-600 w-fit">CSS</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-orange-600 w-fit">HTML</span>
                </div>

                <div className="flex gap-2 flex-wrap mt-7">
                  <Button asChild className="flex-1 text-white py-6 rounded-full bg-gradient-to-r from-blue-700 to-pink-600">
                    <a target="_blank" href="https://github.com/Victor-Okenwa/everno">View Source code</a>
                  </Button>
                  <Button asChild variant={"outline"} className="flex-1 py-6 bg-transparent rounded-full ">
                    <a target="_blank" href="https://everno.vercel.app/">View Live Demo</a>
                  </Button>
                </div>
              </div>

            </div>

            <div className="flex max-md:flex-col justify-between items-center gap-4">
              <img src="/images/blog.jpg"
                data-aos="slide-right"
                className="rounded-md w-full md:w-[50%] h-[400px] object-"
                alt="php blog" />

              <div className="flex flex-col max-w-xl" data-aos="slide-left" data-aos-delay="200">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 drop-shadow-lg drop-shadow-violet-400">Blog</h3>
                <p className="text-secondary-foreground/70 mb-4 text-sm sm:text-md md:text-lg">
                  A personal blog built with PHP, featuring a clean design, responsive layout, and easy navigation for sharing thoughts and ideas.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-[#4f5d95] w-fit">PHP</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-yellow-400 w-fit text-secondary">JavaScript</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-purple-600 w-fit">CSS</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-orange-600 w-fit">HTML</span>
                  <span className="px-2 py-1 text-xs sm:text-sm rounded-full bg-[#c6538c] w-fit">SCSS</span>
                </div>

                <div className="flex gap-2 flex-wrap mt-7">
                  <Button asChild className="flex-1 text-white py-6 rounded-full bg-gradient-to-r from-blue-700 to-pink-600">
                    <a target="_blank" href="https://github.com/Victor-Okenwa/everno">View Source code</a>
                  </Button>
                  <Button asChild variant={"outline"} className="flex-1 py-6 bg-transparent rounded-full ">
                    <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=morse-code.react-next-js-smart-snippets">View Live Demo</a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;