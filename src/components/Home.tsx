import { useEffect, useRef } from 'react';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBoxesAlt, faCode, faEnvelope, faDownload, faLightbulb, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typed from 'typed.js';
import MyModal from './MyModal';
import { useStoreActions } from 'easy-peasy';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import OwlSlider from './mySlider';

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

  const handleModalShow = useStoreActions(action => action.handleModalShow);

  return (
    <main className="overflow-x-hidden">
      <section id='home' className="relative min-h-screen w-screen bg-cover bg-center bg-fixed bg-[url('../../../public/images/codingman2.jpg')]">
        <div className="absolute bg-primary-foreground/80 backdrop-blur-xs size-full"></div>
        <div className="text-center absolute w-[95%] h-full flex justify-center items-center flex-col">
          <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block" data-aos="slide-down">Hi, I am Victor</h1>
          <div className="text-2xl md:text-3xl mt-2 text-secondary-foreground/80" data-aos="slide-up">
            <span className="" ref={el}></span>
            <span className="animate-caret-blink">|</span>
          </div>
        </div>
      </section>

      <section id="about" className="px-2 sm:px-4 py-24 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_0.7px,transparent_1px)] bg-[size:207px_60px] bg-repeat">
        <div className="text-3xl md:text-5xl text-center relative flex flex-col justify-center items-center gap-1">
          <h2>A LITTLE <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text inline-block">ABOUT</span> ME</h2>
          <span className="h-0.5 max-w-md min-w-sm bg-gradient-to-r py-0.5 from-blue-500 to-pink-500 opacity-50"></span>
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
            <CardContent className='text-right' data-aos="slide-left" data-aos-delay="200">
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

      <section id='portfolio' className="bg-center bg-fixed bg-[url('../../../public/images/codinghand.jpg')]">
        <div className="">
          <div className="overlay"></div>
          <div className="portfolio-contents">
            <div className="portfolio-text">
              <p className="">Want to know more about me, and some of my experience?</p>
            </div>
            <div className="portfolio-btns">
              <Button>

                <a href="https://github.com/Victor-Okenwa" data-aos="slide-right" target='_blank' rel="noreferrer" className='btn'>
                  <FontAwesomeIcon icon={faGithub} />
                  View GitHub
                </a>
              </Button>

              <button type="button" className='btn' data-aos="slide-left" onClick={handleModalShow}>
                <FontAwesomeIcon icon={faDownload} />
                View CV</button>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className="skills">
        <div className="overlay"></div>
        <div className="container-fluid">
          <h4>I use my skills and tools to deliver cutting edge products based on your prefrence, view more on my resume</h4>
          <div className="skills-slider">
            {/* <OwlSlider /> */}
          </div>
        </div>
      </section>

      <section id='contact' className="contact">
        <div className="section-head">
          <h2>get in touch</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className="contact-box">
                <div className="content">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <p>okenwavictor003@gmail.com</p>
                </div>
                <div className="contact-overlay">My Email</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="flip-up">
              <div className="contact-box">
                <div className="content">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faTelegram} />
                  </div>
                  <p>+2348062852964</p>
                </div>
                <div className="contact-overlay"><p>Call/Telegram</p></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className="contact-box">
                <div className="content">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhoneSquare} />
                  </div>
                  <p>+2349150696301</p>
                </div>
                <div className="contact-overlay"><p>Call/Whatsapp</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyModal />
    </main>
  )
}

export default Home;