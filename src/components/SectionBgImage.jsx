import React from 'react';
import '../styles/components/SectionBgImage.scss'

const SectionBgImage = ({imageSmall, imageLarge}) => (
  <section className="section__bgImage">
    <picture className="section__bgImage__picture">
      <source  media="(min-width:768px)" srcSet={imageLarge}/>
      <img className="section__bgImage--img" src={imageSmall} title="imagen del post" />
    </picture>
  </section>
);

export default SectionBgImage;
