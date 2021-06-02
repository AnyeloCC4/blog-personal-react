import React from 'react';
import SectionTitulo from './SectionTitulo';
import SectionBlog from './SectionBlog';
import ContainerBlog from './ContainerBlog';
import cardCaminoDev from '../assets/static/cardCaminoDev.png'
import cardVsCode from '../assets/static/cardVsCode.png'

const MainBlogs = () => (
  <main>
    <SectionTitulo
      tituloPrincipal="Blog"
      tituloSecundario="Contenido, Pensamientos, Ideas, Experiencias"
    />
    <SectionBlog>
      <ContainerBlog
        to="/extensiones-vsc"
        titleBlog="Extensiones Para Visual Studio Code"
        parrafo="Quiero compartir contigo las extensiones que utilizo para codear."
        imagenBlog={cardVsCode}
      />
      <ContainerBlog
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿Por dónde comienzas?"
        imagenBlog={cardCaminoDev}
        to="/camino-dev"
      />
    </SectionBlog>
  </main>
);

export default MainBlogs;
