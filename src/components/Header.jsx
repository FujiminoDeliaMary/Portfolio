import React from "react";
import Nav from "./Nav";
import '../reset.css';

import { Link } from "react-scroll";



const Header = () =>{

    return <header className="header">
              <div className="header__overlay"></div>
                <Nav />
                <div>
                  <h1 className="header__name">Marilyne delia tsene</h1>
                  <p className="header__job">I'm a creative developer web Full Stack</p>
                </div>
               

                <div className="header__arrow">
                  <Link 
                  to='about'
                  activeClass='active'
                  smooth={true}
                  spy={true}>

                  <svg with="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 12L0 19.5L20 39.5L40 19.5L32.5 12L20 24.5L7.5 12Z" fill="#F8F8F8"/>
                    </svg>

                  </Link>
               

                </div>
              
           </header>
}

export default Header;