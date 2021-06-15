import React from 'react';
import {Helmet} from 'react-helmet'
import MainAbout from '../components/MainAbout'

const About = () => (
  <>
    <Helmet>
      <meta name="description" content="Hola, mi nombre es Anyelo, estudio sobre desarrollo web, aquí te enseño mis conocimientos virtudes y mi portfolio" />
      <meta name="robots" content="index,follow" />
      <title>Sobre Mí - Anyelo Cruz</title>
    </Helmet>
    <MainAbout/>
  </>
);

export default About;
