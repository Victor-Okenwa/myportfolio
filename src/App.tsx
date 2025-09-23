import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import useWindowScroll from './components/hooks/useWindowScroll';
import BackTop from './components/BackTop';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/Preloader';
import useWindowLoad from './components/hooks/useWindowLoad';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease',
    });
  }, []);

  useWindowLoad();
  (useWindowScroll());

  return (
    <div className={`App dark`} >
      <Preloader />
      <Nav />
      <Home />
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
