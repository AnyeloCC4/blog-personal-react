import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/NotFound.scss'

const NotFound = () => {
  return (
    <>
      <h1 className="notFound">404 NOT FOUND <br />
      <Link to="/">Regresa al Inicio</Link>
      </h1>
      
    </>
  )
}

export default NotFound
