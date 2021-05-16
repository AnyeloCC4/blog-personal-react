import React from 'react';
import {Helmet} from 'react-helmet'
import '../styles/components/About.scss'
import fotoPerfil2 from '../assets/static/foto-perfil2.jpg'


const About = () => (
  <>
    <Helmet>
      <title>Sobre Mí - Anyelo Cruz</title>
    </Helmet>
    <main className="about">

      <div className="about__profile">
        <img src={fotoPerfil2} alt="foto de perfil" title="Foto de Perfil" />
      </div>

      <section className="about__description">
        <h2>¿Quien Soy?</h2>
        <p>Hola, mi nombre Anyelo Cruz, actualmente estudio sobre desarrollo web del lado del Frontend. He creado este blog para probar mis habilidades, además de poder compartir información y conocimientos en tecnologías web, con el objetivo de ayudar a otras personas.</p>
        
        <h2>Mis Conocimientos</h2>
        <p>Intermedios en HTML y CSS.</p>
        <p> Basico-intermedio en Javascript, ReactJS, Sass, Webpack, Git y GitHub.</p>
        <p>Básico en Materialize y Tailwind.</p>

        <p>Estoy en continuo aprendizaje para mejorar mis habilidades como Frontend. Para lograrlo, estudió en la plataforma online de Platzi, además de complementar con la documentación oficial de cada tecnología, y seguir a otros desarrolladores que comparten su contenido.</p>
      </section>

      <section className="about__portfolio">
        <h1>Portfolio</h1>
        <p>Actualmente éste blog es mi único proyecto personal. creado en un inicio con HTML y Sass, luego migrado a ReactJS con Webpack, para retarme a mí mismo de lograr terminar mi blog.
        Pronto haré nuevas actualizaciones al blog, como agregar un formulario de contacto, además de crear nuevo contenido para el blog.</p>
        <p>Tengo dos ideas de proyectos, crear una e-commerce, con HTML y JavaScript, para practicar y mejorar la manipulación del DOM y crear web components. Otra idea que tengo es crear un portal de noticias utilizando Materialize, para practicar con este framework de CSS.</p>
        <p>A medida que obtenga más conocimientos y habilidades las iré compartiendo aquí.</p>
      </section>
    </main>
  </>
);

export default About;
