import React from 'react';
import '../styles/components/SectionBgImage.scss'

const SectionBgImage = ({imagenFondo}) => (
  <section className="section__bgImage">
    <img src={imagenFondo} title="imagen del post" className="section__bgImage--img"/>
  </section>
);

export default SectionBgImage;
