import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = () => {
  return (
  <header className="header">
      <nav className="header__nav">
        <Link to="/">ð  Inicio</Link>
        <Link to="/blogs">âï¸ Blogs</Link>
        <Link to="/about">ð¨âð» Sobre MÃ­</Link>
      </nav>
  </header>
  )
}

export default Header
