import React from 'react';
import SectionBgImage from './SectionBgImage'
import SectionAuthor from './SectionAuthor'
import SectionContentBlog from './SectionContentBlog'

const MainBlog = () => (
  <main>
    <SectionBgImage />
    <SectionAuthor 
      fecha="14/05/2021"
    />
    <SectionContentBlog />
  </main>
);

export default MainBlog;
