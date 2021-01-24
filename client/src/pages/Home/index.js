import React from 'react'
import './styles.less'
import Slider from "../../components/Slider";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
const Home = (props) => {
    return (
        <div>
            <h2>This is Home Page</h2>
            <Slider/>
            <ProductList/>
            <Footer/>
        </div>
    )
}

export default Home;