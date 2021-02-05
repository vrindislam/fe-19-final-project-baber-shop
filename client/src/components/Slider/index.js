import {Button, Carousel} from 'antd';
import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import './styles.less'
import Ajax from "../../services/Ajax";

const {get} = Ajax;

const Slider = () => {

    const history = useHistory();
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        get('/slides')
            .then(slides => setBanners(slides || []))
    }, [])


    return (
        <div id='testBanner'>
            <Carousel arrows='true'>
                {banners.map(banner => (
                        <div key={banner.customId}>
                            <div className='carousel'>
                                <img className='carousel-mainImage' src={banner.imageUrl} alt={`slider-${banner.alt}`}/>
                                <div className='carousel-text'>
                                    <h2 className='carousel-text-title'>{banner.text.title}</h2>
                                    <div>{banner.text.text}</div>
                                    <Button className='carousel-text-btn' shape='round' ghost
                                            onClick={() => {
                                                history.push(banner.link)
                                            }}>More details</Button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </Carousel>
        </div>
    );
}
export default Slider;