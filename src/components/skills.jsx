// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3, FaSymfony, FaNodeJs, FaBootstrap, FaSass, FaPhp, FaDatabase,} from 'react-icons/fa';
import { SiPhp } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoWordpress } from "react-icons/io5";

const Skills = () =>{

    return <section className="skills" id="skills">
            <h2 className="skills__title">
                Mes compétences
            </h2>
            <p className="skills__speech">Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.</p>

            <div className="skills__list">

                <div className="skills__front" data-aos="fade-down-right">
                    <h3 className="skills__front-title">Front-end</h3>
                    <ul className="skills__front-list">
                        <li><FaHtml5 size={40} color="#e44d26" />Html5</li>
                        <li><FaCss3 size={40} color="#264de4" />Css3</li>
                        <li><FaSass size={40} color="#cb6799" />Sass</li>
                        <li><FaReact size={40} color="#017fa5" /> React JS</li>
                        <li><FaBootstrap size={40} color="#7209f5" />Boostrap</li>
                        <li><FaJs size={40} color="#f7df1e" />Javascript</li>
                    </ul>
                </div>
                <div className="skills__back" data-aos="fade-down-left">
                    <h3 className="skills__back-title">Back-end</h3>
                    <ul className="skills__back-list">
                        <li><SiPhp size={55} color="#787cb4"/>Php</li>
                        <li><FaDatabase size={40}/>MySql</li>
                        <li><FaSymfony size={40} />Symfony</li>
                        <li><BiLogoPostgresql size={50} color="#2f6792"/>PostGresql</li>
                        <li><FaNodeJs size={40} />Node Js</li>
                        <li><IoLogoWordpress size={40} color="#1b769c"/>WordPress</li>
                    </ul> 
                </div>

            </div>  

    </section>
}

export default Skills;