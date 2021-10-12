import React from 'react';
import authorFoto from '../assets/static/authorFoto.png'
import '../styles/components/SectionAuthor.scss'

const SectionAuthor = ({fecha}) => (
  <section className="section__author">
    <div className="section__author--card">
      <img src={authorFoto} alt="foto de perfil" title="foto de perfil" />
      <div>
        <h3>📝 Escrito por: Anyelo Cruz</h3>
        <h3>🗓️ Publicado: {fecha}</h3>
      </div>
    </div>
  </section>
);

export default SectionAuthor;
