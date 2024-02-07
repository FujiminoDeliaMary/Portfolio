import React from "react";
import react from '../assets/projects/React_Logo_SVG.svg';
import webpack from '../assets/projects/webpack.svg';
import nodeJS from '../assets/projects/nodeJs.svg';
import sass from '../assets/projects/sass.svg';
import emailJs from '../assets/projects/emailJs.svg';
import portfolio from '../assets/projects/portfolio.png';
import { Link } from "react-scroll";
import artfullCode from '../assets/projects/artfullCode.png';



const Projects = () =>{
    return <section className="projects" id="projects">
                <h2 className="projects__title">Mes Projets</h2>
                <div className="projects__container">
                    <article className="project">
                        <h3 className="project__title">Artfull Code</h3>
                        <h4 className="project__description">Site Web d'une petite agence de developpement web localisé à la rochelle en France et se focalisant plus sur la créaction de sites e-learning qui fait ses débuts en ligne.</h4>

                        <img src={artfullCode} alt="artfull code" className="project__home"/>
                        <div className="tools">
                            <h5 className="tools__title">Outils utilisés sur ce projet</h5>
                            <div className="tools__img">
                                <p> <img src={react} alt="react js" /></p>
                                <p> <img src={webpack} alt="webpack" /></p>
                                <p> <img src={nodeJS} alt="node js" /></p>
                                <p> <img src={emailJs} alt="email js" /></p>
                                <p> <img src={sass} alt="sass" /></p>
                            </div>
                        </div>
                        <div className="project__links">
                            <ul>
                                <li className="project__link"><Link to="contact">Voir le projet</Link></li>
                                <li className="project__link"><Link to="contact">Voir le code</Link></li>
                            </ul>
                        </div>
                    </article>

                    <article className="project">
                        <h3 className="project__title">Portfolio</h3>
                        <h4 className="project__description">Mon portfolio</h4>

                        <img src={portfolio} alt="portfolio" className="project__home"/>
                        <div className="tools">
                            <h5 className="tools__title">Outils utilisés sur ce projet</h5>
                            <div className="tools__img">
                                <p> <img src={react} alt="react js" /></p>
                                <p> <img src={webpack} alt="webpack" /></p>
                                <p> <img src={nodeJS} alt="node js" /></p>
                                <p> <img src={emailJs} alt="email js" /></p>
                                <p> <img src={sass} alt="sass" /></p>
                            </div>
                        </div>
                        <div className="project__links">
                            <ul>
                                <li className="project__link"><Link to="contact">Voir le projet</Link></li>
                                <li className="project__link"><Link to="contact">Voir le code</Link></li>
                            </ul>
                        </div>
                    </article>
                </div>

    </section>
}

export default Projects