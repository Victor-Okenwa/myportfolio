import { useEffect, useRef } from 'react';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBoxesAlt, faCode, faEnvelope, faFileAlt, faLightbulb, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typed from 'typed.js';
import MyModal from './MyModal';
import { useStoreActions } from 'easy-peasy';
import OwlSlider from './mySlider';

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Designer.', 'Developer.', 'Freelancer.'],
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
  const experience = parseInt(today.getFullYear()) - 2021;

  const handleModalShow = useStoreActions(action => action.handleModalShow);

  return (
    <main className="Home">
      <section id='home' className="hero container-fluid">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4" data-aos="slide-down">I am Okenwa Victor</h1>
          <div className="hero-subtitle-box">
            <p className="hero-subtitle" ref={el}><span className="typed"></span></p>
          </div>
        </div>
      </section>

      <section id='about' className="about">
        <div className="section-head">
          <h2>A LITTLE <span>ABOUT</span> ME</h2>
        </div>
        <div className="about-me-text">
          <p>A Software Engineer and a Full-Stack web developer with {experience}+ years experience. I love making an impact whenever am working a project, I like it when a project brings the best out of me or should I say I bring the best to any project. Ask me what I would bring to the table? I will bring the best. I also love solving problems especially that bug on the screen unseen so much that I think I was made for this. Not much of an extrovert but I believe Engineering is team work especially when the team works like a family.</p>
        </div>
      </section>

      <section id='portfolio' className="portfolio">
        <div className="container-fluid portfolio-box">
          <div className="overlay"></div>
          <div className="portfolio-contents">
            <div className="portfolio-text">
              <p className='mk-jost'>Want to know more about me, my projects and works?</p>
            </div>
            <div className="portfolio-btns">
              <a href="https://github.com/Victor-Okenwa" data-aos="slide-right" target='_blank' rel="noreferrer" className='btn'>
                <FontAwesomeIcon icon={faGithub} />
                View GitHub
              </a>
              <button className='btn' data-aos="slide-left" onClick={handleModalShow}>
                <FontAwesomeIcon icon={faFileAlt} />
                View CV</button>
            </div>
          </div>
        </div>
      </section>

      <section id='services' className="services">
        <div className="section-head">
          <h2>services</h2>
          <p className='text-center'>I offer amazing things to clients</p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="flip-left">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    web design
                  </h4>
                  <p className="service-description text-center mk-abel">
                    Elevate your online presence with captivating visuals and intuitive user interfaces tailored to your brand's identity, ensuring an engaging and memorable user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="slide-up">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    web development
                  </h4>
                  <p className="service-description text-center mk-abel">
                    Transform your ideas into functional, dynamic websites with cutting-edge technologies, meticulous coding, and seamless integration, delivering robust solutions for your online goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="flip-right">
              <div className="service-box">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faBoxesAlt} />
                </div>
                <div className="service-content">
                  <h4 className="service-title">
                    Responsive Design
                  </h4>
                  <p className="service-description text-center mk-abel">
                    Reach your audience effortlessly across all devices with fluid and adaptable designs, optimizing usability and accessibility for a seamless browsing experience on desktops, tablets, and smartphones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className="skills">
        <div className="overlay"></div>
        <div className="container-fluid">
          <h4>I use my skills and tools to deliver cutting edge products based on your prefrence, view more on my resume</h4>
          <div className="skills-slider">
            <OwlSlider />
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