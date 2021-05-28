import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/components/SectionBannerHome.scss'
import fotoPerfil2 from '../assets/static/foto-perfil2.jpg';

const SectionBannerHome = () => (
  <section className="section__banner">
    <img className="section__banner--img" src={fotoPerfil2} alt="Imagen de perfil" title="Foto de perfil de Anyelo" />

    <div className="section__banner--name">
      <h1>Anyelo Cruz</h1>
      <h2>Frontend Developer</h2>
      <Link to="./about">Conóceme</Link>
    </div>
  </section>
);

export default SectionBannerHome;
