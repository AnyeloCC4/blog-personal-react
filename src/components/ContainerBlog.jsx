import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/ContainerBlog.scss'

const ContainerBlog = ({title, parrafo, imagenBlog, to}) => {
  return (
    <Link to={to} className="blog--container">
        <img src={imagenBlog} alt="imagen del post" title="Imagen del post"/>
        <h2>{title}</h2>
        <p>{parrafo}</p>
    </Link>
  )
}

export default ContainerBlog
