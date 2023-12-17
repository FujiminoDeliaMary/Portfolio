import React from "react";

const Skills = () =>{

    return <section className="skills">
            <h2 className="skills__title">
                My Skills
            </h2>
            <p className="skills__speech">Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.</p>

            <div className="skills__list">

                <div className="skills__front">
                    <h3 className="skills__front-title">Front-end</h3>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Scss</li>
                        <li>React JS</li>
                        <li>Boostrap</li>
                        <li>Javascript</li>
                        <li>Tailwind Css</li>
                    </ul>
                </div>
                <div className="skills__back">
                    <h3 className="skills__back-title">Back-end</h3>
                    <ul>
                        <li>Php</li>
                        <li>MySql</li>
                        <li>Symfony</li>
                        <li>PostGresql</li>
                        <li>Node Js</li>
                    </ul>
                </div>

            </div>  

    </section>
}

export default Skills;