import React from 'react';
import ImageGallery from 'react-image-gallery';

import './styles.less';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const ProductCarousel = () => {
    return (
        <div className='product-carousel-container'>
            <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                thumbnailPosition={'left'}
                product-carousel-container={false}
            />
        </div>
    )

}

export default ProductCarousel;