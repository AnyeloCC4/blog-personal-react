import React from 'react';
import SectionBannerHome from '../components/SectionBannerHome'
import SectionTitulo from '../components/SectionTitulo'
import SectionBlog from '../components/SectionBlog'
import ContainerBlog from './ContainerBlog'
import caminoDev from '../assets/static/caminoDev1.png'
import imagenBlog2 from '../assets/static/vscodeLogo.png'


const MainHome = () => (
  <main>
    <SectionBannerHome/>
    <SectionTitulo
      tituloSecundario="Últimas Publicaciones"
    />
    <SectionBlog>
      <ContainerBlog
        to="/camino-dev"
        imagenBlog={caminoDev}
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta infromación, ¿Por dónde comienzas?"
      />
      <ContainerBlog 
        to="#"
        titleBlog="Extensiones Para VS Code"
        parrafo="Proximamente"
        imagenBlog={imagenBlog2}  
      />

    </SectionBlog>
  </main>
);

export default MainHome;
