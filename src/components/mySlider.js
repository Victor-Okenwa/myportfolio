import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGit, faHtml5, faNodeJs, faPhp, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faChain, faDatabase } from '@fortawesome/free-solid-svg-icons';
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
const OwlSlider = () => {
    return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            responsive={responsive}
            dots={false}
            autoplay={true}
            autoplayTimeout={5000}
        >
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faNodeJs} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">Node js</div>
                        <p className="info">Node.js is a server-side JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">70%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">react</div>
                        <p className="info">A JavaScript library for building user interfaces, enabling efficient rendering and managing UI components with ease.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">65%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faPhp} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">php</div>
                        <p className="info">PHP is a server-side scripting language widely used for web development to create dynamic web pages and applications.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">80%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">Mongo/MySql</div>
                        <p className="info">MongoDB: NoSQL database, document-oriented, scalable, flexible. MySQL: Relational database, SQL-based, structured, ACID-compliant.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">85%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faGit} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">Git</div>
                        <p className="info">Git is a distributed version control system for tracking changes in source code repositories efficiently.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">72%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">html5</div>
                        <p className="info">
                            HTML5 is a modern markup language for structuring and presenting content on the web with enhanced multimedia capabilities.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">95%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">css3</div>
                        <p className="info">CSS3 revolutionized web styling, offering advanced features for layout, animation, and design customization.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">93%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '93%' }} aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faSass} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">scss</div>
                        <p className="info">Sass is a CSS preprocessor that extends the functionality of CSS with variables, mixins, and nesting for easier styling.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">90%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faBootstrap} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">bootstrap</div>
                        <p className="info">Bootstrap: A front-end framework for building responsive and user-friendly websites with pre-designed components and customizable CSS.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">90%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <div className="skill-icon">
                        <FontAwesomeIcon icon={faChain} />
                    </div>
                    <div className="skill-description">
                        <div className="title mk-jost fw-bold">Axios/jquery</div>
                        <p className="info">axios is a promise-based HTTP client for making asynchronous requests, while jQuery simplifies HTML document traversal and manipulation.</p>
                    </div>
                    <div className="skill-level">
                        <span className='level-text'>Level <span className="pull-right">67%</span></span>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>)
}

export default OwlSlider;