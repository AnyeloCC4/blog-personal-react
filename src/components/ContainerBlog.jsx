import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/ContainerBlog.scss'

const ContainerBlog = ({titleBlog, parrafo, imagenBlog, to, nombreImagen}) => {
  return (
    <Link to={to} className="section__container">
        <img src={imagenBlog} alt="imagen del post" title={nombreImagen}/>
        <h2>{titleBlog}</h2>
        <p>{parrafo}</p>
    </Link>
  )
}

export default ContainerBlog
