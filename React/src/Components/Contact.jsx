import React, { useState } from 'react'
import './contact.css'

function Contact() {
    const [email,setEmail] = useState(true)
    const [tel,setTel] = useState(true)

    

  return (
    <div className="contact">
        <div className="redes">
        <a href="https://www.linkedin.com/in/douglas-silva-309b4522a/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/skyzzin" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>

        <div className="infos">
        <i className="fa-solid fa-envelope" ></i> {email && (<b>contato.douglas.dev@gmail.com</b>)}
        </div>

        <div className="infos" >
        <i className="fa-solid fa-phone" ></i> {tel && (<b>+55 71 9 8339-7433</b>)}
        </div>

       

    </div>
  )
}

export default Contact