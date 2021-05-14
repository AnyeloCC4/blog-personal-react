import React from 'react'
import imagenBlog1 from '../assets/static/camino-dev.jpeg'
import '../styles/components/CaminoDev.scss'

const CaminoDev = () => {
  return (
    <main className="caminoDev">

    <section className="caminoDev__banner">
      <img src={imagenBlog1} alt="imagen blog mi camino en la programacion" />
    </section>


    <section className="caminoDev__author">
      <div className="caminoDev__author--card">
        <img src="/assets/images/banner.jpeg" alt="foto de perfil" title="foto de perfil"/>
        <div>
          <h3>Escrito por: Anyelo Cruz</h3>
          <h3>Publicado: 24/04/2021</h3>
        </div>
      </div>
    </section>


    <section className="caminoDev__post">
      <h1><em>Mí Camino en la Programación</em></h1>
      <p>Con la ayuda de internet puedes lograrlo, pero con tanta información, ¿por donde comienzas?, aquí es donde tomé la decisión de suscribir me a la plataforma online Platzi, con la esperanza de convertirme en un profesional en el campo de la tecnología. bien pero, ¿En qué área? ¿Cómo comienzo? ¿Cuánto tiempo me llevará? ¿Podré lograrlo? déjame que te cuente.</p>
      
      <h3><em>Objetivo ser un profesional</em></h3>
      <p>Al entrar en la plataforma comence por el curso basico de ingles, pero no solo por el inglés entre aquí, quería dedicarme a algún tipo de desarrollo, crear algo, así que empecé la ruta de desarrollo de aplicaciones en android, era lo que más me llamaba la atención, el primer curso fue de Dart. pero al ver las primeras clases no entendi nada de lo que decía el profesor, por lo cual me sentí muy frustrado, y de inmediato surgió otra pregunta ¿realmente esto es para mi?</p>

      <p>Frustrado, comencé a ver otro tipo de cursos que pudieran orientarme por donde continuar, fue cuando vi el curso Aprender en línea efectivamente. aquí, entendí cómo funcionaba la plataforma, descubrí que tipo de estudiante soy y qué tipo de material se adecua más a mi aprendizaje, luego continúe con Gestión Efectiva del tiempo y técnicas de estudio, que fueron los que definitivamente me ayudaron a enfocarme cómo aprender a cómo organizar mi espacio de trabajo y tiempo. pero y ahora... ¿por donde continuo?</p>
      
      <h3><em>El Curso que definió el camino</em></h3>
      <p>Ahora, que sabía que tenía que comenzar por algo más... para principiante, hay fue que apareció el Curso Básico de Javascript(en adelante lo llamaré JS), que iluminó mi camino hacia el desarrollo web pero antes continúe con programación Básica donde aprendí más sobre JS ademas conoci HTML y cada vez me sentía mejor con estos lenguajes. inmediatamente empecé con la escuela de Desarrollo Web, donde comenzaron realmente los problemas. </p>

      <p>Que me gustara JS no significaba que lo hubiese dominado, sólo me encanto como funcionaba al ver lo que se podía lograr programando.  Al comenzar la ruta, HTML y CSS estaban en los primero cursos, los cursos de JS se encontraban al final de la parte basica, asi que  continúe tomando los cursos, cuando tuve 10 cursos aprobados, comencé a sentir que sabía lo suficiente como para crear una landing page para probar mis habilidades, pero cuando llegó la hora de realizarlo, no sabía por donde comenzar ni mucho menos como hacerlo, pero, ¿Que estaba haciendo mal?</p>

      <h3><em>Lo que no se practica, no se mejora ¿Cierto?</em></h3>
      <p>Solo poner play a las clases no funciona, si el conocimiento adquirido no se practica, no se aprende. Aprendí a la mala, vuelta al principio, volví a repasar todos los cursos, a realizar los ejercicios que dejaban los profesores, hasta que eventualmente logre resultados, logre hacer una landing page, bastante fea, básica, como página de los 90’s, pero lo hice, comenzaba a tener cierto dominio con HTML y CSS. La práctica hace al maestro, maquetar y estilizar ya no son un problema tan complejo, sigo practicando, aún queda un largo camino, pero ¿qué hay de JS?</p>

      <p>Aquí es donde la resiliencia comienza a tener un papel principal, programar para mi no ha sido fácil, la frustración de no entender a la primera, de pasar horas intentando de que algo siquiera funcione, de mirar y mirar codigo tratando de comprender cómo funciona, o que un simple error de tipeo rompa tu código, sin embargo aquí estoy, continuo aprendiendo, sigo aplicando el conocimiento con fallos y seguiré fallando, hasta que eventualmente logre dominar este lenguaje, y te insto a ti a que no te rindas, en lo sea que hagas, no dejes que te domine la frustración,  el miedo a fallar, ni mucho menos el miedo al fracaso, ponte de pie una vez más y comienza de nuevo, recuerda, <em><strong>“La confianza en sí mismo es el primer secreto del éxito”</strong></em> -Ralph Emerson.</p>
    </section>

  </main>
  )
}

export default CaminoDev
