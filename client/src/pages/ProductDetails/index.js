import React, {useEffect, useState} from 'react';
import ProductCarousel from "../../components/ProductCarousel";
import Ajax from "../../services/Ajax";

import './styles.less';
import CategoryCatalogue from "../../components/Catalogue/CategoryCatalog";

const ProductDetails = (props) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        async function fetch() {
            const {imageUrls} = await Ajax.get('/products/76100')
            setImages(imageUrls);
        }

        fetch();
    }, [])

    return (
        <div className='container'>
            <ProductCarousel imageUrls={images}/>
            <CategoryCatalogue/>
        </div>
    )
}

export default ProductDetails