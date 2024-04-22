import { useState, useEffect } from "react";

function useProductList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productList = await fetch("https://fakestoreapi.com/products");
    const productListJson = await productList.json();
    setProducts(productListJson);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { products };
}

export default useProductList;
