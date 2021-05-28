import React from 'react'
import '../styles/components/SectionBlog.scss'

const SectionBlog = ({ children }) => {
  return (
    <section className="section__blogs">
      {children}
    </section>
  )
}

export default SectionBlog
