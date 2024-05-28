import React, { useState } from 'react';
import './App.css';
import StarRating from './StarRating';


const ProductCard = ({ product }) => {
    const [count, setCount] = useState(0);

  // Функция для увеличения значения счетчика
  const increment = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения значения счетчика
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0); // не позволяйте счетчику быть отрицательным
  };
  return (
    <div className="product-card">
        <img src={product.imageUrl} alt={product.name} className="product-image" />    
        <div className="product-name">
            <h1>{product.name}</h1>
        </div>

        <div className="product-art-name">
            <h1>Артикул:</h1>
        </div>

        <div className="product-art">
            <p>{product.article_number}</p>
        </div>

        <div className="rating">
            <h1>Рейтинг</h1>
        </div>
        <div className="rating_star">
            <StarRating rating={product.rating} />
        </div>
        <div className="product-quantity">
            <p>{product.quantity}</p>
        </div>

        <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>

        <div className="product-description-name">
            <h1>Описание</h1>
        </div>

        <div className="product-description">
            <p>{product.description}</p>
        </div>

        <div className="product-characteristic-name">
            <h1>Характеристики</h1>
        </div>

        <div className="product-characteristic">
            <p>{product.characteristic}</p>
        </div>
        <div className="price">
            <p>{product.price} ₽</p>
        </div>
        <div className="dprice">
            <p>{product.dprice} 100 ₽</p>
        </div>
        <button className="add-to-cart-button">В корзину</button>
        
    </div>
  );
};

export default ProductCard;
