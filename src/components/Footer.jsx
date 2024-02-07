import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Footer = () =>{
    return <footer className="footer">
        <p><a href="tel:0651358858" className="footer__tel"><FaPhoneAlt />(+33) 06 51 35 88 58</a></p>
        <p><a href="mailto:marilynedelia@gmail.com" className="footer__email"><MdEmail />marilynedelia@gmail.com</a></p>
        <p><MdLocationOn />La rochelle 17000</p>
    </footer>
}

export default Footer;