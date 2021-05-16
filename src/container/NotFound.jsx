import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import '../styles/components/NotFound.scss'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Ups! Página no Encontrada</title>
      </Helmet>
      <h1 className="notFound">404 NOT FOUND <br />
      <Link to="/">Regresa al Inicio</Link>
      </h1>
      
    </>
  )
}

export default NotFound
