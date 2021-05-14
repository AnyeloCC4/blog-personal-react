import React from 'react'
import '../styles/components/Footer.scss'
import twitter from '../assets/static/twitter.png'
import github from '../assets/static/github.png'
import linkedin from '../assets/static/linkedin.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <Link to="https://twitter.com/AnyeloCC4"><img src={twitter} alt="Twitter" title="twitter"/>Twitter</Link>
        <Link to="https://github.com/AnyeloCC4"><img src={github} alt="Github" title="github"/>GitHub</Link>
        <Link to="https://www.linkedin.com/in/anyelo-cruz-998a5b104/"><img src={linkedin} alt="LinkedIn" title="linkedin"/>LinkedIn</Link>
      </div>
      <div className="footer__end">
        <p>Compartiendo un poco de mi con ustedes <br/> @AnyeloCC4</p>
      </div>
  </footer>
  )
}

export default Footer
