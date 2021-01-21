import React from 'react'
import './styles.less'
import Slider from "../../components/Slider";
import ProductList from "../../components/ProductList";

function Home (props) {

  return (
    <div>
        <Slider/>
        <ProductList/>
    </div>
  )
}

export default Home