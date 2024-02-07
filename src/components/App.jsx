import React, { useState } from "react";
import Header from "./Header";
import '../style.scss';
import About from "./About";
import Skills from "./skills";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () =>{
    const [scrollTop, setScrollTop] = useState(0);

        const handleScroll = event => {
            setScrollTop(window.scrollY);
            console.log(scrollTop)
        };
    return <div className="App" onScroll={handleScroll}>
        <h2 className="bref">{scrollTop}</h2>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer/>
    </div>
}

export default App;