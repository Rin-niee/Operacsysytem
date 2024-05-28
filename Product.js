import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import './App.css';
import './App.js';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/${id}`)
      .then(response => {
        console.log('Product fetched:', response.data); // Отладка
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product">
      <ProductCard product={product} />
      </div>
      );
};
export default ProductPage ;
