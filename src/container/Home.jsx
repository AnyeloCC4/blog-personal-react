import React from 'react';
import { Helmet } from 'react-helmet';
import MainHome from '../components/MainHome';

const Home = () => (
  <>
    <Helmet>
      <meta name="description" content="Anyelo Cruz Frontend Developer, Blog creado para compartir informacion y conocimientos sobre tecnologias y herramientas webs"/>
      <meta name="robots" content="index,follow"/>
      <title>Bienvenido - Anyelo Cruz</title>
    </Helmet>
    <MainHome />
  </>
);

export default Home;
