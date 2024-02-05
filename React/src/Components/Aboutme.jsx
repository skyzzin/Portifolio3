import React, { useEffect } from 'react'
import './aboutme.css'
import Home from './Home'
function Aboutme() {
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector('.about').style.right = '0px'
        },50)
    },[])
  return (
   <div className="about">
        <Home />
        <h1 style={{textAlign:'center'}}>About Me</h1>
        <br />
        <div className="myBox">
            <div className="tecnos">
            <i className="fa-brands fa-node"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-java"></i>
            <i className="fa-solid fa-database"></i>
            </div>
            
            <div className="sobre">
                        🌐 Passionate Teen Web Developer 🚀
                
                At the age of 17, I'm diving headfirst into the world of web development with a keen interest in creating seamless web experiences.
                
                <h3>What I Offer:</h3>
                <ul>
                    <li>Passion for Web Development</li>
                    <li>Exploring Various Web Technologies</li>
                    <li>Commitment to Learning and Growing</li>
                </ul>
                
                <h3>Projects:</h3>
                <ul>
                    <li>Personal Blog Site</li>
                    <li>Portfolio Website</li>
                </ul>
                
                Let's embark on this exciting journey of web development together.
    
            </div>
        </div>
   </div>
  )
}

export default Aboutme