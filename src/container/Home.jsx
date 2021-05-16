import React from 'react';
import { Helmet } from 'react-helmet';
import Main from '../components/Main';
import ContainerBlog from '../components/ContainerBlog';
import imagenBlog1 from '../assets/static/camino-dev.jpeg';

const Home = () => (
  <>
    <Helmet>
      <title>Bienvenido - Anyelo Cruz</title>
    </Helmet>
    <Main>
      <ContainerBlog
        title="Mi Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿por donde comienzas?"
        imagenBlog={imagenBlog1}
        to="/camino-dev"
      />

    </Main>
  </>
);

export default Home;
