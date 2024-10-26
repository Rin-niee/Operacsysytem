import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import './homepage.css';
import './App.js';
import logo from './logo.png'

const HomePage = () => {
  const [product, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      console.log('Starting data fetch...'); // Логирование начала выполнения fetchData
      try {
        const response = await axios.get('http://localhost:5000/'); // Убедитесь, что путь к вашему маршруту на сервере правильный
        console.log('Data fetched successfully:', response.data); // Логирование данных
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data!', error);
      }
    };
    fetchData();
  }, []);
  if (!Array.isArray(product)) {
    console.error('No massive');
    return null;
  }
  return (
    <div className="home-page">
      <div className="logo">
        <h1>
          <img src={logo} alt="Логотип магазина" style={{ width: '700px', height: 'auto' }} />
        </h1>
      </div>
      <div className="catalog">
        <h2>Каталог</h2>
        </div>
      {product.map(item => (
          <div key={item.id}>
            <div className='fon'>
              <div className='link'>
                <Link to={`/${item.id}`}>{item.name}</Link>
              </div>
              <div className='picture'>
                <img src={item.imageUrl} alt={item.name} style={{ width: '200px', height: '200px' }}/>
              </div>
              <div className="cenahm">
                  <p>{item.price} ₽</p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default HomePage;