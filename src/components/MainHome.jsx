import React from 'react';
import SectionBannerHome from '../components/SectionBannerHome'
import SectionTitulo from '../components/SectionTitulo'
import SectionBlog from '../components/SectionBlog'
import ContainerBlog from './ContainerBlog'
import cardCaminoDev from '../assets/static/cardCaminoDev.png'
import cardVsCode from '../assets/static/cardVsCode.png'


const MainHome = () => (
  <main>
    <SectionBannerHome/>
    <SectionTitulo
      tituloSecundario="Últimas Publicaciones"
    />
    <SectionBlog>
      <ContainerBlog 
        to="/extensiones-vsc"
        imagenBlog={cardVsCode}
        titleBlog="Extensiones Para Visual Studio Code"
        parrafo="Quiero compartir contigo las extensiones que utilizo para codear."
      />
      <ContainerBlog
        to="/camino-dev"
        imagenBlog={cardCaminoDev}
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿Por dónde comienzas?"
      />
    </SectionBlog>
  </main>
);

export default MainHome;
