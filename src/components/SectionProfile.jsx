import React from 'react';
import fotoPerfil2 from '../assets/static/foto-perfil2.jpg'
import '../styles/components/SectionProfile.scss'

const SectionProfile = () => (
  <section className="section__profile">
    <img src={fotoPerfil2} alt="foto de perfil" title="Foto de Perfil" />
  </section>
);

export default SectionProfile;
