import React from 'react';
import fotoPerfil2 from '../assets/static/foto-perfil2.jpg'
import '../styles/components/SectionAuthor.scss'

const SectionAuthor = ({fecha}) => (
  <section className="section__author">
    <div className="section__author--card">
      <img src={fotoPerfil2} alt="foto de perfil" title="foto de perfil" />
      <div>
        <h3>Escrito por: Anyelo Cruz</h3>
        <h3>Publicado: {fecha}</h3>
      </div>
    </div>
  </section>
);

export default SectionAuthor;
