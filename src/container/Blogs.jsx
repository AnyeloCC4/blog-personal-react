import React from 'react';
import ContainerBlog from '../components/ContainerBlog';
import '../styles/components/ContainerBlog.scss';
import '../styles/components/Blogs.scss';
import imagenBlog1 from '../assets/static/camino-dev.jpeg'


const Blogs = () => (
  <main className="blogs">
    <section className="blogs__banner">
      <h1>Blog</h1>
      <h2>Contenido, Pensamientos, Ideas, Experiencias.</h2>
    </section>

    <section className="blogs__container">
      <ContainerBlog title="Mí Camino en la Programación"
        parrafo="Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿por donde comienzas?"
        imagenBlog={imagenBlog1}
        to="/camino-dev"/>
    </section>
  </main>
);

export default Blogs;
