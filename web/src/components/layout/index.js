import React from "react"
import Header from '../header'
import Footer from '../footer'

export default function Layout(props) {

  const { children, data } = props;
  const { layoutHeader, layoutFooter } = data;
  
  return (
    <div>
      <Header data={layoutHeader} />
      {children }
      <Footer data={layoutFooter} />
    </div>
  )
}