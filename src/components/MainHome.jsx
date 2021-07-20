import React from 'react';
import SectionBannerHome from '../components/SectionBannerHome'
import SectionTitulo from '../components/SectionTitulo'
import SectionBlog from '../components/SectionBlog'
import ContainerBlog from './ContainerBlog'
import cardCaminoDev from '../assets/camino-dev/cardCaminoDev.png'
import smallCardVsCode from '../assets/blogVsCode/smallVsCode.png'
import largeCardVsCode from '../assets/blogVsCode/largeVsCode.png'

const MainHome = () => (
  <main>
    <SectionBannerHome/>
    <SectionTitulo
      tituloSecundario="Últimas Publicaciones"
    />
    <SectionBlog>
      <ContainerBlog 
        to="/extensiones-vsc"
        smallImage={smallCardVsCode}
        largeImage={largeCardVsCode}
        titleBlog="Extensiones Para Visual Studio Code"
        parrafo="Quiero compartir contigo las extensiones que utilizo para codear (Con ejemplos)."
      />
      <ContainerBlog
        to="/camino-dev"
        smallImage={smallCardVsCode}
        largeImage={largeCardVsCode}
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿Por dónde comienzas?"
      />
    </SectionBlog>
  </main>
);

export default MainHome;
