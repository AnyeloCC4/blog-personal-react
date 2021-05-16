import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/components/Main.scss'
import fotoPerfil from '../assets/static/foto-perfil.jpg'

const Main = ({ children }) => (
  <main className="home">
    <section className="home__banner">
      <img className="home__banner--img" src={fotoPerfil} alt="Imagen de perfil" title="Foto de perfil de Anyelo"/>

      <div className="home__banner--name">
        <h1>Anyelo Cruz</h1>
        <h2>Frontend Developer</h2>
        <Link to="./about">Conóceme</Link>
      </div>
    </section>

    <section className="home__title">
      <h2>Últimas Publicaciones</h2>
    </section>

    <section className="home__blog">
      {children}
    </section>

  </main>
);

export default Main;
