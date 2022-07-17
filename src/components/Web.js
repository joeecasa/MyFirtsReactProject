import React from 'react';
import Header from "../components/Header"
import Banner from "../components/Banner"
import Producto from "../components/Producto"
import Footer from "../components/Footer"

function Web(){
  return (
    <div className="container">
      <Header />
     <Banner />
     <Producto />
     <Footer />
    </div>
  )

}
export default Web;