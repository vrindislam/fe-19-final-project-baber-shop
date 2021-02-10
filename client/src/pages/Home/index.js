import React from 'react'
import './styles.less'
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";

import {MetaForPages} from "../../components/Helmet"
import Union from "./Union.png"

const Home = (props) => {

    return (
        <div>
            <MetaForPages
              title="Home Page "
              content="BarberShop Home Main Page"
              rel="icon"
              href={Union}
            />
            <Slider/>
            <Banner title={'Best sellers'} config='cc'/>
            <Banner title={'One more  thing'} config='cc'/>
        </div>
    )
}

export default Home;