import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Footer = () =>{
    return <footer className="footer" >
             <p className="footer__linkedin"><BiLogoLinkedinSquare size={25}/><a href="https://www.linkedin.com/in/delia-marilyne-tsene-4895a52a9/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
             <p className="footer__location"><MdLocationOn size={25}/>La rochelle 17000</p>

             <p><a href="tel:0651358858" className="footer__tel"><FaPhoneAlt/>   06 51 35 88 58</a></p>
      
   
    </footer>
}

export default Footer;