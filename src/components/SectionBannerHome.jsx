import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/components/SectionBannerHome.scss'
import largeFotoPerfil from '../assets/static/largeFotoPerfil.png';
import smallFotoPerfil from '../assets/static/smallFotoPerfil.png';

const SectionBannerHome = () => (
  <section className="section__banner">
    <picture>
      <source media="(min-width: 768px)" srcSet={largeFotoPerfil}/>
      <img className="section__banner--img" src={smallFotoPerfil} alt="Imagen de perfil" title="Foto de perfil de Anyelo" />
    </picture>

    <div className="section__banner--name">
      <h1>Anyelo Cruz</h1>
      <h2>Frontend Developer</h2>
      <Link to="./about">Conóceme</Link>
    </div>
  </section>
);

export default SectionBannerHome;
