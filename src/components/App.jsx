import React from "react";
import Header from "./Header";
import '../style.scss';
import About from "./About";
import Skills from "./skills";

const App = () =>{
    
    return <div className="App">
        <Header />
        <About />
        <Skills />
    </div>
}

export default App;