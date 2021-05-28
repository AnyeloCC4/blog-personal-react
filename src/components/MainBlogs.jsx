import React from 'react';
import SectionTitulo from './SectionTitulo';
import SectionBlog from './SectionBlog';
import ContainerBlog from './ContainerBlog';
import imagenBlog1 from '../assets/static/caminoDev1.png';
import imagenBlog2 from '../assets/static/vscodeLogo.png';

const MainBlogs = () => (
  <main>
    <SectionTitulo
      tituloPrincipal="Blog"
      tituloSecundario="Contenido, Pensamientos, Ideas, Experiencias"
    />
    <SectionBlog>
      <ContainerBlog
        to="#"
        titleBlog="Extensiones Para VS Code"
        parrafo="Proximamente"
        imagenBlog={imagenBlog2}
      />
      <ContainerBlog
        titleBlog="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿Por dónde comienzas?"
        imagenBlog={imagenBlog1}
        to="/camino-dev"
      />
    </SectionBlog>
  </main>
);

export default MainBlogs;
