import React from 'react';
import ImageGallery from 'react-image-gallery';
import './styles.less';

const ProductCarousel = ({imageUrls}) => {
    const images = imageUrls.map(item => {
        return {
            original: item,
            thumbnail: item
        }
    })

    return (
        <div className='product-carousel-container'>
            <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                product-carousel-container={false}
            />
        </div>
    )
}

export default ProductCarousel;