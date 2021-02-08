import React, {useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';

import './styles.less';

const ProductCarousel = ({ imageUrls }) => {
    const [img, setImg] = useState([])

    useEffect( () => {
        imageUrls.map( image => {
            return setImg( state => [
                    ...state,
                    {
                        original: image,
                        thumbnail: image
                    }
                ])
            })
    }, [imageUrls, img])


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