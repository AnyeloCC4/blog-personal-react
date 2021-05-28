import React from 'react';
import SectionProfile from './SectionProfile'
import SectionDescription from './SectionDescription'
import SectionTitulo from './SectionTitulo'
import SectionPortfolio from './SectionPortfolio'
import SectionBlog from './SectionBlog'
import ContainerBlog from './ContainerBlog'
import enProceso from '../assets/static/enproceso.jpg'

const MainAbout = () => (
  <main>
    <SectionProfile/>
    <SectionDescription/>
    <SectionTitulo
      tituloPrincipal="Portfolio"
    />
    <SectionPortfolio/>
    <SectionBlog>
      <ContainerBlog
        to="#"
        titleBlog="Proximamente E-commerce"
        parrafo="Trabajando en este proyecto"
        imagenBlog={enProceso}
      />
      <ContainerBlog
        to="#"
        titleBlog="Proximamente Portal de Noticias"
        parrafo="Trabajando en este proyecto"
        imagenBlog={enProceso}
      />
    </SectionBlog>

  </main>
);

export default MainAbout;