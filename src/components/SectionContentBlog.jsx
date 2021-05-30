import React from 'react';
import '../styles/components/SectionContentBlog.scss'

const SectionContentBlog = ({children}) => (
  <section className="section__post">
    {children}
  </section>
);

export default SectionContentBlog;
