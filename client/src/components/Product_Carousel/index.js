import React, {useEffect, useState} from 'react';
import Ajax from "../../services/Ajax";
import ImageGallery from 'react-image-gallery';

import './styles.less';

const ProductCarousel = () => {
    const [img, setImg] = useState([])

    useEffect( () => {
        async function fetch () {
            const { imageUrls } = await Ajax.get('/products/76100')
            imageUrls.map( image => {
                return setImg( state => [
                        ...state,
                        {
                            original: image,
                            thumbnail: image
                        }
                    ])
                })
        }
        fetch();
    }, [])

    return (
        <div className='product-carousel-container'>
            <ImageGallery
                items={img}
                showFullscreenButton={false}
                showPlayButton={false}
                product-carousel-container={false}
            />
        </div>
    )

}

export default ProductCarousel;