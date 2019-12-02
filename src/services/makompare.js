import axios from "axios";
const instance = axios.create({
  baseURL: process.env.MAKOMPARE_URL || "http://localhost:3000"
});

export const formatReponse = (product) => {
  let minorPrice = 0;
  let cheaperProduct = {}
  product.companies.forEach((item) => {        
    if(item.price < minorPrice || minorPrice === 0) {
      cheaperProduct = item;
    }
  })
  return {
    ...product,
    productId: cheaperProduct.productId,
    image: cheaperProduct.imageUrl,
    price: cheaperProduct.price,
    title: cheaperProduct.name,
    brand: cheaperProduct.brand,
  }
}

export const searchProducts = async name => {
  try {
    const response = await instance.get(`/products/${name}`);
    const products = response.data;
    
    return products.map(formatReponse);
  } catch(err) {
    throw new Error(`Failed to search product with name ${name} - ${err.message}`);
  }
};

export const searchProductById = async id => {
  const response = await instance.get(`/products/detail/${id}`);
  return formatReponse(response.data);
};
