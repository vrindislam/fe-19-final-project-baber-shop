import axios from "axios";

// Get All products
export const getProducts = async () => await axios.get(`${process.env.REACT_APP_API}/products`);