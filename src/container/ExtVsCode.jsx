import React from 'react'
import {Helmet} from 'react-helmet'
import MainBlog from '../components/MainBlog'
import SectionBgImage from '../components/SectionBgImage'
import SectionAuthor from '../components/SectionAuthor'
import SectionContentBlog from '../components/SectionContentBlog'
import bannerVsc from '../assets/static/vscodeLogo.png'
import liveServer from '../assets/static/liveServer.gif'

const ExtVsCode = () => (
  <>
      <Helmet>
        <title>Extensiones Vs Code - Anyelo Cruz</title> 
      </Helmet> 
      <MainBlog>
        <SectionBgImage imagenFondo={bannerVsc}/>
        <SectionAuthor fecha="30/05/2021"/>
        <SectionContentBlog>
          <img src={liveServer} alt="gif demostrativo de live server" title="live server en accion"/>
        </SectionContentBlog>

      </MainBlog>
  </>
)


export default ExtVsCode
