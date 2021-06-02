import React from 'react';
import { Helmet } from 'react-helmet';
import MainBlog from '../components/MainBlog';
import SectionBgImage from '../components/SectionBgImage';
import SectionAuthor from '../components/SectionAuthor';
import SectionContentBlog from '../components/SectionContentBlog';
import bgVsCode from '../assets/static/bgVsCode.png';
import autoRenameTag from '../assets/static/autoRenameTag.gif';
import smallSinBracketColor from '../assets/static/smallSinbracketpair.png';
import largeSinBracketColor from '../assets/static/largeSinbracketpair.png'
import bracketPair from '../assets/static/bracketpair.gif'
import codeRunner from '../assets/static/codeRunner.gif'
import colorHigh from '../assets/static/colorHighlight.png'
import smallSinColorHigh from '../assets/static/smallSinColorHighlight.png'
import largeSinColorHigh from '../assets/static/largeSinColorHighlight.png'
import liveServer from '../assets/static/liveServer.gif'
import materialIcon from '../assets/static/materialIcon.png'
import sinMaterialIcon from '../assets/static/sinMaterialIcon.png'
import pathIntellisense from '../assets/static/pathIntellisense.gif'

const ExtVsCode = () => (
  <>
    <Helmet>
      <title>Extensiones VS Code - Anyelo Cruz</title>
    </Helmet>
    <MainBlog>
      <SectionBgImage imagenFondo={bgVsCode} />
      <SectionAuthor fecha="30/05/2021" />
      <SectionContentBlog>
        <h1><em>Extensiones para Visual Studio Code</em></h1>
        <p>
          Hoy te quiero compartir las extensiones para Visual Studio Code que utilizo, estoy seguro que más de una te servirá para allanar tu camino en la programación.
        </p>

        <h2>Auto Rename Tag</h2>
        <p>Renombra tus etiquetas con esta extensión. Si te equivocaste de etiqueta, renombrarla es fácil, también es útil si utilizas web components. Verás que Auto Rename tag es muy útil. </p>
        <img src={autoRenameTag} alt="muestra de auto rename tag" />
        <a href="#">enlace</a>
        
        <h2>Bracket Pair Colorized</h2>
        <p>Paréntesis, llaves, corchetes coloreados, para que puedas diferenciar con colores cada uno de sus pares, además genera una linea guia para que veas dónde están conectadas. Esta extensión es muy útil cuando tu código se vuelve más grande.</p>
        <img src={bracketPair} alt="muestra bracket pair" />
        <picture>
          <source media="(min-width:768px)" srcSet={largeSinBracketColor}/>
          <img src={smallSinBracketColor} alt="muestra sin bracket pair" />
        </picture>
        <a href="#">enlace</a>

        <h2>Code Runner</h2>
        <p>cuando necesites correr algún bloque de código y no quieras pasar a las devtools del navegador o la línea de comandos esta extensión es para tí. solo selecciona el bloque que necesitas y ejecutarlo desde VS Code.</p>
        <img src={codeRunner} alt="muestra en accion code runner" />
        <a href="#">enlace</a>

        <h2>Color Highlight</h2>
        <p>Esta extensión es para identificar colores en CSS, cuando declares un color aparecerá en tu código coloreado, simple pero bastante práctico, especialmente cuando declares variables con colores</p>
        <img src={colorHigh} alt="Muestra colorHighlight" />
        <picture>
          <source media="(min-width:768px)" srcSet={largeSinColorHigh}/>
          <img src={smallSinColorHigh} alt="muestra sin colorHighlight" />
        </picture>
        <a href="#">enlace</a>

        <h2>Live Server</h2>
        <p>Una de las extensiones más conocidas y útiles, no por nada tiene más de 12 millones de descargas. Un servidor en vivo que te ayuda a visualizar tus cambios en tiempo real.</p>
        <img src={liveServer} alt="muestra live server en accion" />
        <a href="#">enlace</a>

        <h2>Material Icon Theme</h2>
        <p>Cambia los iconos que vienen predeterminados en VS Code, con esta extensión es posible y se ve mucho mejor a la vista, actúa sobre archivos y carpetas.</p>
        <img src={materialIcon} alt="muestra material icon theme" />
        <img src={sinMaterialIcon} alt="muestra sin material icon theme" />
        <a href="#">enlace</a>

        <h2>Path Intellisense</h2>
        <p>identificar las rutas de archivos que necesitarás importar en otros archivos es más fácil con esta extensión. Se vuelve más imprescindible cuando trabajas con módulos, verás cómo te ayuda cuando tus proyectos aumentan en número de archivos y carpetas.</p>
        <img src={pathIntellisense} alt="muestra path intellisense" />
        <a href="#">enlace</a>

        <h2>:emojisense:</h2>
        <p>Tengo entendido que los emojis vienen por defecto en sistemas MacOS, pero yo uso Linux Ubuntu y no tenía la posibilidad de agregar emojis en el código, con esta extensión se acabó ese problema.</p>
        <img src="" alt="" />
        <a href="#">enlace</a>
      </SectionContentBlog>

    </MainBlog>
  </>
);

export default ExtVsCode;
