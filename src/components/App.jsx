import React, { useEffect, useState } from "react";
import Header from "./Header";
import '../styles/style.scss';
import About from "./About";
import Skills from "./skills";
import Projects from "./Projects";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Contact from "./Contact";
import {motion} from 'framer-motion'


const App = () =>{
  
    useEffect(() => {
        AOS.init({ duration: 400,
                   disable : 'phone'} ); // Initialise AOS avec la durée d'animation spécifiée

      }, []);

    const [scrollTop, setScrollTop] = useState(0);

        const handleScroll = event => {
            setScrollTop(window.scrollY);
            console.log(scrollTop)
        };
    return <div className="App" onScroll={handleScroll}>
    
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
    </div>
}

export default App;