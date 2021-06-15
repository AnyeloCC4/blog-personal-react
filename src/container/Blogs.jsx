import React from 'react';
import {Helmet} from 'react-helmet'
import MainBlogs from '../components/MainBlogs';


const Blogs = () => (
  <>
    <Helmet>
      <meta name="description" content="Últimas publicaciones del blog" />
      <meta name="robots" content="index,follow" />
      <title>Blog - Anyelo Cruz</title>
    </Helmet>
    <MainBlogs />
  </>
);

export default Blogs;
