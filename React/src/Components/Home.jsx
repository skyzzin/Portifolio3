import React, { useEffect } from 'react'
import './style.css'

function Home({onProjects}) {
    const Load = ()=>{
            setTimeout(()=>{
                document.querySelector('.home').style.right = '0px'
                document.querySelector('header').style.right = '0px'
            },50)
    }
    useEffect(Load,[])

    

  return (
   <div className="home">
    <div className="leftBox">
        <img src="img.png" alt="" />
    </div>
    <div className="rightBox">
        <h1>Douglas Silva Santos</h1>
        <h2>Web Developer FullStack</h2>
    <p>
    Welcome to my portfolio! My name is Douglas, and I work as a Front End <br />
    Developer. On this page, you'll find my projects, my skills, and my contact information.
    </p>
    <button onClick={onProjects} >Projects</button>
    </div>
    
   </div>
  )
}

export default Home