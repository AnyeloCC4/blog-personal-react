import React from 'react'
import '../styles/components/Footer.scss'
import twitter from '../assets/static/twitter.png'
import github from '../assets/static/github.png'
import linkedin from '../assets/static/linkedin.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a target="_blank" rel="noopener" href="https://twitter.com/AnyeloCC4"><img src={twitter} alt="Twitter" title="twitter"/>Twitter</a>
        <a target="_blank" rel="noopener" href="https://github.com/AnyeloCC4"><img src={github} alt="Github" title="github"/>GitHub</a>
        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/anyelocc4/"><img src={linkedin} alt="LinkedIn" title="linkedin"/>LinkedIn</a>
      </div>
      <div className="footer__end">
        <p>Compartiendo un poco de mi con ustedes <br/> Hecho con 💚 @AnyeloCC4</p>
      </div>
  </footer>
  )
}

export default Footer
