import { faBars, faBriefcase, faCogs, faHome, faMobileAlt, faMoon, faQuoteLeft, faSun, faTimes, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';

const Nav = () => {
    const theme = useStoreState((state) => state.theme);
    const toggleTheme = useStoreActions(action => action.toggleTheme);
    const activeLink = useStoreState((state) => state.activeLink);
    const handleNavLinkClick = useStoreActions((action) => action.handleNavLinkClick);

    const [navToggle, setNavToggle] = useState(false);
    const handleNavToggle = () => {
        navToggle ? setNavToggle(false) : setNavToggle(true);
    }
    return (
        <nav className='Nav navbar navbar-lg'>
            <div className="navbar-brand btn">
                <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="theme">
                <button className="theme-button btn" onClick={toggleTheme}>
                    {!theme && <FontAwesomeIcon icon={faSun} />}
                    {theme && <FontAwesomeIcon icon={faMoon} />}
                </button>
            </div>

            <div className="navbar-toggle">
                <button className='btn disp-md' onClick={handleNavToggle}>
                    <FontAwesomeIcon className={navToggle ? "opacity-0 rotateIcon" : ''} icon={faBars} />
                    <FontAwesomeIcon className={!navToggle ? "opacity-0 rotateIcon" : ''} icon={faTimes} />
                </button>
            </div>

            <div className={`nav-items ${navToggle ? 'show' : ''}`}>
                <ul>
                    <li className="nav-item">
                        <a href='#home' className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleNavLinkClick('home')}>
                            <FontAwesomeIcon icon={faHome} />
                            <span>home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='#about' className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleNavLinkClick('about')}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <span>about</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href='#portfolio' className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`} onClick={() => handleNavLinkClick('portfolio')}>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>portfolio</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href='#services' className={`nav-link ${activeLink === 'services' ? 'active' : ''}`} onClick={() => handleNavLinkClick('services')}>
                            <FontAwesomeIcon icon={faCogs} />
                            <span>services</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href='#skills' className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => handleNavLinkClick('skills')}>
                            < FontAwesomeIcon icon={faTools} />
                            <span>skills</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='#contact' className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleNavLinkClick('contact')}>
                            < FontAwesomeIcon icon={faMobileAlt} />
                            <span>contact</span>
                        </a>
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Nav