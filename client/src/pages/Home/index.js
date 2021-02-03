import React from 'react'
import './styles.less'
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import {setAxiosHeaders} from "../../services/setAxiosHeaders";

const Home = (props) => {

    setAxiosHeaders();

    return (
        <div>
            <h2>This is Home Page</h2>
            <Slider/>
            <Banner title={'Best sellers'} config='cp'/>
            <Banner title={'One more  thing'} config='cc'/>
        </div>
    )
}

export default Home;