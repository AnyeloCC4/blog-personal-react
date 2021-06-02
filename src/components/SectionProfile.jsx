import React from 'react';
import smallFotoPerfil from '../assets/static/smallFotoPerfil.png'
import largeFotoPerfil from '../assets/static/largeFotoPerfil.png'
import '../styles/components/SectionProfile.scss'

const SectionProfile = () => (
  <section className="section__profile">
    <picture>
      <source media="(min-width:768px)" srcSet={largeFotoPerfil}/>
      <img src={smallFotoPerfil} alt="foto de perfil" title="Foto de Perfil" />
    </picture>
  </section>
);

export default SectionProfile;
