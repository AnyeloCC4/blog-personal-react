import React from 'react'
import { Helmet } from 'react-helmet'
import MainBlog from '../components/MainBlog'
import SectionBgImage from '../components/SectionBgImage'
import SectionAuthor from '../components/SectionAuthor'
import SectionContentBlog from '../components/SectionContentBlog'
import bgAtajosLarge from '../assets/atajosVsCode/bgAtajosLarge.png'
import bgAtajosSmall from '../assets/atajosVsCode/atajosVsCodeSmall.png'
import copyPaste from '../assets/atajosVsCode/copyPaste.gif'
import enter from '../assets/atajosVsCode/enter.gif'
import comentarios from '../assets/atajosVsCode/cometarios.gif'
import moverLineas from '../assets/atajosVsCode/moverLineas.gif'
import coincidencias from '../assets/atajosVsCode/coincidencias.gif'

const AtajosVsCode = () => (
  <>
    <Helmet>
      
    </Helmet>
    <MainBlog>
      <SectionBgImage imagenFondo={bgAtajosSmall}/>
      <SectionAuthor fecha="02/08/2021"/>
      <SectionContentBlog>
        <h1><em>Atajos para Visual Studio Code</em></h1>
        <p>Hoy quiero compartirte algunos de los atajos más útiles para Visual Studio Code para optimizar tu tiempo mientras estés codeando, vamos allá. </p>

        <h2>“Copiar, Cortar y Pegar”, pero con una funcionalidad añadida</h2>
        <p>la gran diferencia es que no es necesario seleccionar toda la linea o lineas de código que quieras copiar, salvo que quieras copiar solo cierto contenido, mira te muestro.</p>
        <img src={copyPaste} alt="" />
        <p>con “Ctrl + C” solo copia la línea que quieres y “Ctrl + V” solamente pega la línea deseada debajo de la línea donde se encuentra el punto de inserción (barra parpadeante). Y con “Ctrl + X” cortar la línea completa y  pegas en la línea deseada.</p>

        <h2>Saltar e insertar línea</h2>
        <p>Te pasa que estás escribiendo y para agregar una línea tienes que llegar al final de ella para saltar y agregar una nueva, bueno con “Ctrl + enter” podrás hacerlo sin tener que llegar al final, pero hay más, con “Ctrl + Shift + Enter” desplazamos la línea actual hacia abajo insertando una nueva línea si lo necesitas, te muestro ambos ejemplos.</p>
        <img src={enter} alt="" />

        <h2>Agregar comentarios</h2>
        <p>con “Ctrl + Shift + 7” dejas en comentario la linea o lineas completas si lo necesitas, sin necesidad de ir al principio de esta, tambien esta la opcion de insertar el comentario con “Ctrl + Shift A” cumple la misma funcion solo que con otra sintaxis  y puedes agregarla donde sea, te dejo el ejemplo.</p>
        <img src={comentarios} alt="" />

        <h2>Mover lineas</h2>
        <p>Este es uno de mis favoritos y el que mas me gusto cuando lo aprendi, mover bloques o solo una linea sin copiar y pegar solamente con “Alt + ↓/↑” según sea la necesidad de moverlo arriba o abajo, aqui la muestra.</p>
        <img src={moverLineas} alt="" />

        <h2>Seleccionar coincidencias</h2>
        <p>cuando quieras cambiar el nombre de algún elemento, variable, o lo que sea que tenga el mismo nombre con “Ctrl + D” puedes seleccionarlas y modificarlas sin tener que seleccionar una por una, solo necesitas que el punto de inserción se encuentre en la palabra que se está repitiendo y que va a ser modificada, observa.</p>
        <img src={coincidencias} alt="" />

        <p>Estos han sido algunos de los atajos que son algo básicos pero, muy utiles a la hora de escribir tu código</p>
      </SectionContentBlog>
    </MainBlog>
    
  </>
)

export default AtajosVsCode
