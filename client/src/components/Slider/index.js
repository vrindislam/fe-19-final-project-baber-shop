import {Carousel} from 'antd';
import React from 'react'
import {Link} from "react-router-dom";

function Slider() {

    const contentStyle = {
        minWidth: '300px',
        maxWidth: '100%'
    };
// Надо еще будет добавить в объект картинки ссылку для перехода при клике(когда будут категории)
// а картинки будем получать запросом
    const bannersIMG = [
        {
            url: 'https://barbercompany.com/image/cache/webp/catalog/Banner/banner-1--desktop-1920x650.webp',
            index: 1
        },
        {
            url: 'https://barbercompany.com/image/cache/webp/catalog/Banner/banner-2--desktop-1920x650.webp',
            index: 2
        },
        {
            url: 'https://barbercompany.com/image/cache/webp/catalog/Banner/banner-3--desktop-1920x650.webp',
            index: 3
        }
    ]

    return (
        <Carousel autoplay>
            {bannersIMG.map(banner => (
                    <div key={banner.index}>
                        <Link to="/home">
                            <img style={contentStyle} src={banner.url} alt={`slider-${banner.index}`}/>
                        </Link>
                    </div>
                )
            )}
        </Carousel>
    );
}
export default Slider;