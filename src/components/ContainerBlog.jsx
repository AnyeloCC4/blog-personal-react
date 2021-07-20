import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/ContainerBlog.scss'

const ContainerBlog = ({titleBlog, parrafo, smallImage, largeImage, to, nombreImagen}) => {
  return (
    <Link to={to} className="section__container">
        <picture>
          <source media="(min-width:768px)" srcSet={largeImage}/>
          <img src={smallImage} alt="imagen del post" title={nombreImagen}/>
        </picture>
        <h2>{titleBlog}</h2>
        <p>{parrafo}</p>
    </Link>
  )
}

export default ContainerBlog
