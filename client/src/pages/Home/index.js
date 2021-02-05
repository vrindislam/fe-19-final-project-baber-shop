import React from 'react'
import './styles.less'
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";

const Home = (props) => {

    return (
        <div>
            <Slider/>
            <Banner title={'Best sellers'} config='cc'/>
            <Banner title={'One more  thing'} config='cc'/>
        </div>
    )
}

export default Home;