import { faFacebookSquare, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <div className="socials">
                <a href="https://facebook.com/victorrk.okenwa" rel='noreferrer' target="_blank" className="link"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href="https://www.linkedin.com/in/victor-okenwa-003955285/" rel='noreferrer' target="_blank" className="link"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://upwork.com/freelancers/~01adc42e4a7b01f135" rel='noreferrer' target="_blank" className="link"><FontAwesomeIcon icon={faUpwork} /></a>
            </div>
            <p>All Rights Reserved &copy; {today.getFullYear()}</p>
            <b>Made with <FontAwesomeIcon color='red' icon={faHeart} /> by @okenwavictor</b>
        </footer>
    )
}

export default Footer;