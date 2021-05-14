import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = () => {
  return (
  <header className="header">
      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">Sobre Mí</Link>
      </nav>
  </header>
  )
}

export default Header
