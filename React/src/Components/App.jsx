import React, { useState, useRef } from 'react';
import './style.css';
import './contact.css';
import './projects.css';
import './app.css';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Aboutme from './aboutme';

function App() {
    const [layout, setLayout] = useState({
        home: true,
        projects: false,
        aboutme: false
    });

    const onHome = () => {
        setLayout({
            home: true,
            projects: false,
            aboutme: false
        });
    };

    const onProjects = () => {
        setLayout({
            home: false,
            projects: true,
            aboutme: false
        });
    };

    const onAboutme = () => {
        setLayout({
            home: false,
            projects: false,
            aboutme: true
        });
    };

    const menuRef = useRef(null);

    const toggleMenu = () => {
        menuRef.current.classList.toggle('activity');
    };

    return (
        <div className="body">
            <header>
                <ul ref={menuRef}>
                    <li onClick={onHome}>
                        HOME
                    </li>

                    <li onClick={onProjects}>
                        PROJECTS
                    </li>

                    <li onClick={onAboutme}>
                        ABOUT ME
                    </li>
                </ul>

                <div className="menu" onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </div>
            </header>

            {layout.home && (
                <div>
                    <Home onProjects={onProjects} />
                    <Contact />
                </div>
            )}

            {layout.projects && <Projects />}
            {layout.aboutme && <Aboutme />}
        </div>
    );
}

export default App;
