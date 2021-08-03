import React from 'react';
import SectionBannerHome from '../components/SectionBannerHome'
import SectionTitulo from '../components/SectionTitulo'
import SectionBlog from '../components/SectionBlog'
import ContainerBlog from './ContainerBlog'
import smallCaminoDev from '../assets/camino-dev/smallCaminoDev.png'
import largeCaminoDev from '../assets/camino-dev/largeCaminoDev.png'
import smallCardVsCode from '../assets/blogVsCode/smallVsCode.png'
import largeCardVsCode from '../assets/blogVsCode/largeVsCode.png'
import smallAtajosVSCode from '..//assets/atajosVsCode/atajosVsCodeSmall.png'
import largeAtajosVSCode from '../assets/atajosVsCode/atajosVsCodeLarge.png'

const MainHome = () => (
  <main>
    <SectionBannerHome/>
    <SectionTitulo
      tituloSecundario="Últimas Publicaciones"
    />
    <SectionBlog>
      <ContainerBlog
        to="/atajos-vsc"
        smallImage={smallAtajosVSCode}
        largeImage={largeAtajosVSCode}
        titleBlog="Atajos para Visual Studio Code"
        parrafo="Te muestro con ejemplos algunos de los atajos mas utiles, para optimizar tú tiempo."
      />
      <ContainerBlog 
        to="/extensiones-vsc"
        smallImage={smallCardVsCode}
        largeImage={largeCardVsCode}
        titleBlog="Extensiones Para Visual Studio Code"
        parrafo="Quiero compartir contigo las extensiones que utilizo para codear (Con ejemplos)."
      />
      <ContainerBlog
        to="/camino-dev"
        smallImage={smallCaminoDev}
        largeImage={largeCaminoDev}
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿Por dónde comienzas?"
      />
    </SectionBlog>
  </main>
);

export default MainHome;
