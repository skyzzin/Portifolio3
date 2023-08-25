import React, { useEffect } from 'react'
import './projects.css'

function Projects() {
  const Load = ()=>{
     setTimeout(()=>{
      document.querySelector('.projects').style.right = '0px'
     },50)
  }
  useEffect(Load,[])
  return (
    <div className="projects">
        <h1>My Projects</h1>
        <div className="boxDisplay">
        <a href="https://imoveisgoogle.com.br/" target=''>
        <div className="box">
            <h1>My First Project</h1>
           <img src="mainproject.png" alt="" />
            <div className="tags">
              <div className="tag">NodeJS</div>
              <div className="tag">ReactJS</div>
              <div className="tag">ExpressJS</div>
              <div className="tag">15-05-2023</div>
            </div>
        </div>
        </a>

        <a href="https://imoveisgoogle.com.br/" target=''>
        <div className="box">
            <h1>My First Project</h1>
           <img src="mainproject.png" alt="" />
            <div className="tags">
              <div className="tag">NodeJS</div>
              <div className="tag">ReactJS</div>
              <div className="tag">ExpressJS</div>
              <div className="tag">15-05-2023</div>
            </div>
        </div>
        </a>

        <a href="https://imoveisgoogle.com.br/" target=''>
        <div className="box">
            <h1>My First Project</h1>
           <img src="mainproject.png" alt="" />
            <div className="tags">
              <div className="tag">NodeJS</div>
              <div className="tag">ReactJS</div>
              <div className="tag">ExpressJS</div>
              <div className="tag">15-05-2023</div>
            </div>
           
        </div>
        </a>
        </div>
       
    </div>
  )
}

export default Projects