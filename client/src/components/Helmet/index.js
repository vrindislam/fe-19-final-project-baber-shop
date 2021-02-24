import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Ajax from "../../services/Ajax";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MetaForPages = ({ title, content, rel, href, src, type }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const result = await Ajax.get("/products");
      setProducts(result);
    }
    fetchProducts();
  }, []);

  const metaContent = [...new Set(products.map(item => item.name + item.brand + item.category))].toString().split(",").join(" ");
  const metaTitle = [...new Set(products.map(item => item.category))].toString().split(",").join(" ");

  return (
    <Helmet>
      <title>{title} {metaTitle}</title>
      <meta name="description" content={`${content}${metaContent}`}/>
      <link rel={rel} type={type} href={href}/>
      <script src={src} type={type}/>
    </Helmet>
  );
};

export const MetaForEachPage = ({ title, content, rel, href, src, type }) => {

  const { itemNo } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios(`http://localhost:5000/api/products/${itemNo}`)
      .then((response) => setProduct(response.data))
      .catch((e) => console.log("ProductPage---->>>>useEffect----->>>HELMET------>>>",e))
  }, [itemNo])
  // console.log("MetaForEachPage----------->>>HELMET------>>>",itemNo);
  const metaContent = (product.name + product.brand + product.categories).toString().split(",").join(" ");
  const metaTitle = (product.name + product.brand + product.categories).toString();
  return (
    <Helmet>
      <title>
        `{title} {metaTitle}`
      </title>
      <meta name="description"
            content={`${content}${metaContent}`}
      />
      <link
        rel={rel} type={type} href={href}
      />
      <script
        src={src} type={type}
      />
    </Helmet>
  );
}
