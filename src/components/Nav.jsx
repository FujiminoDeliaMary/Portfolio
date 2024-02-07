import React from "react";
import { Link } from "react-scroll";


 const Nav = () =>{
    return <nav class="nav">
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
                         <a href="mailto:marilynedelia@gmail.com">Contact</a>
                  </li>
         
                </ul>
            </nav>
 }

 export default Nav;