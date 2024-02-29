import React from "react";
import { Link } from "react-scroll";


 const Nav = () =>{
    return <nav class="nav">
                <p className="nav__title">Portfolio.</p>
                <ul class="nav__list">
                  
                    <li class="nav__item">
                         <Link 
                            to="about" activeClass='active'
                            smooth={true}
                            spy={true}>
                                About Me
                        </Link>
                  </li>
                  <li class="nav__item">
                         <Link 
                            to="skills" activeClass='active'
                            smooth={true}
                            spy={true}>
                                Mes compétences
                        </Link>
                  </li>
                  <li class="nav__item">
                         <Link 
                            to="projects" activeClass='active'
                            smooth={true}
                            spy={true}>
                                Mes projets
                        </Link>
                  </li>
                  <li class="nav__item">
                  <Link 
                            to="contact" activeClass='active'
                            smooth={true}
                            spy={true}>
                                Contact
                        </Link>
                  </li>
         
                </ul>
            </nav>
 }

 export default Nav;