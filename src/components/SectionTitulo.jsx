import React from 'react';
import '../styles/components/SectionTitulo.scss';

const SectionTitulo = ({tituloPrincipal, tituloSecundario}) => (
  <section className="section__title">
    <h1>{tituloPrincipal}</h1>
    <h2>{tituloSecundario}</h2>
  </section>
);

export default SectionTitulo;
