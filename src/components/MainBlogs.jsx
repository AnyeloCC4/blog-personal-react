import React from 'react';
import SectionTitulo from './SectionTitulo';
import SectionBlog from './SectionBlog';
import ContainerBlog from './ContainerBlog';
import smallCaminoDev from '../assets/camino-dev/smallCaminoDev.png'
import largeCaminoDev from '../assets/camino-dev/largeCaminoDev.png'
import smallCardVsCode from '../assets/blogVsCode/smallVsCode.png'
import largeCardVsCode from '../assets/blogVsCode/largeVsCode.png'

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
        smallImage={smallCardVsCode}
        largeImage={largeCardVsCode}
      />
      <ContainerBlog
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿Por dónde comienzas?"
        smallImage={smallCaminoDev}
        largeImage={largeCaminoDev}
        to="/camino-dev"
      />
    </SectionBlog>
  </main>
);

export default MainBlogs;
