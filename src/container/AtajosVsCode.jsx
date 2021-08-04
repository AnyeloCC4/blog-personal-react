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
    <meta name="description" content="Te muestro con ejemplos algunos de los atajos mas utiles, para optimizar tú tiempo" />
      <meta name="robots" content="index,follow"/>
      <title>Atajos VS Code - Anyelo Cruz</title>
    </Helmet>
    <MainBlog>
      <SectionBgImage imagenFondo={bgAtajosLarge}/>
      <SectionAuthor fecha="03/08/2021"/>
      <SectionContentBlog>
        <h1><em>Atajos para Visual Studio Code</em></h1>
        <p>Hoy quiero compartirte algunos de los atajos más útiles para Visual Studio Code para optimizar tu tiempo mientras estés codeando. Estos son para sistemas operativos Linux y Windows, para MacOS son bastante similares, te dejare los enlaces de la lista completa de los atajos al final del articulo. Comencemos. </p>

        <h2>“Copiar, Cortar y Pegar”, pero con una funcionalidad añadida</h2>
        <p>la gran diferencia es que no es necesario seleccionar toda la linea o lineas de código que quieras copiar, salvo que quieras copiar solo cierto contenido, mira te muestro.</p>
        <img src={copyPaste} alt="Ejemplo de Copiar y Pegar" />
        <p>con “Ctrl + C” solo copia la línea que quieres y “Ctrl + V” solamente pega la línea deseada debajo de la línea donde se encuentra el punto de inserción (barra parpadeante). Y con “Ctrl + X” cortar la línea completa y  pegas en la línea deseada.</p>

        <h2>Saltar e insertar línea</h2>
        <p>Te pasa que estás escribiendo y para agregar una línea tienes que llegar al final de ella para saltar y agregar una nueva, bueno con “Ctrl + enter” podrás hacerlo sin tener que llegar al final, pero hay más, con “Ctrl + Shift + Enter” desplazamos la línea actual hacia abajo insertando una nueva línea si lo necesitas, te muestro ambos ejemplos.</p>
        <img src={enter} alt="Ejemplo para saltar e insertar lineas" />

        <h2>Agregar comentarios</h2>
        <p>con “Ctrl + Shift + 7” dejas en comentario la linea o lineas completas si lo necesitas, sin necesidad de ir al principio de esta, tambien esta la opcion de insertar el comentario con “Ctrl + Shift A” cumple la misma funcion solo que con otra sintaxis  y puedes agregarla donde sea, te dejo el ejemplo.</p>
        <img src={comentarios} alt="Ejemplo para agregar Comentarios" />

        <h2>Mover lineas</h2>
        <p>Este es uno de mis favoritos y el que mas me gusto cuando lo aprendi, mover bloques o solo una linea sin copiar y pegar solamente con “Alt + ↓/↑” según sea la necesidad de moverlo arriba o abajo, aqui la muestra.</p>
        <img src={moverLineas} alt="Ejemplo para desplazar Lineas de Código" />

        <h2>Seleccionar coincidencias</h2>
        <p>cuando quieras cambiar el nombre de algún elemento, variable, o lo que sea que tenga el mismo nombre con “Ctrl + D” puedes seleccionarlas y modificarlas sin tener que seleccionar una por una, solo necesitas que el punto de inserción se encuentre en la palabra que se está repitiendo y que va a ser modificada, observa.</p>
        <img src={coincidencias} alt="Ejemplo para Selecionar Coincidencias" />

        <p>A continuación los enlaces con la lista completa de atajos de Visual Studio Code, para ambos sistema Operativo.
        <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a>
        <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a>
        <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">MacOs</a>
        Estos han sido algunos de los atajos que suelo utilizar mas frecuentemente, muy utiles a la hora de escribir código, espero que te sirvan de referencia para su uso y que logres implementarlos a la hora de codear.
        Eso es todo por ahora, que tengas un excelente día, nos vemos en un siguiente artículo.</p>
      </SectionContentBlog>
    </MainBlog>
    
  </>
)

export default AtajosVsCode
