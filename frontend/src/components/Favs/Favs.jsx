import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Favs.css";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Favs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, []);

  const storedFavIds = JSON.parse(localStorage.getItem('favIds')) || [];
  const favProducts = products.filter(product => storedFavIds.includes(product.id));

  const handleCarts = (productId) => {
    let storedCartIds = JSON.parse(localStorage.getItem('cartIds')) || []; // Mevcut sepet ID'lerini al veya boş dizi oluştur
    
    if (!storedCartIds.includes(productId)) {
      storedCartIds.push(productId); // Eğer ID daha önce eklenmediyse, ekle
      localStorage.setItem('cartIds', JSON.stringify(storedCartIds)); // Güncellenmiş sepet ID'lerini kaydet
    }
  };

  return (
    <> 
      <Header/>
      <h2 className='pt-3'>FAVORİLER</h2>
      <div className="product-wrapper justify-content-center pt-3">
        {favProducts.length > 0 ? 
          favProducts.map((fav, index) => (
            <div className="card" style={{width:'18rem'}} key={index}>
              <Link to={`/detay/${fav.id}`}>
                <img src={fav.image} className="card-img-top" alt={fav.title} />
              </Link>     
              <div className="card-body">
                <Link to={`/detay/${fav.id}`}>
                  <h5 className="card-title">{fav.title}</h5>
                </Link>   
                <p className="card-text">{fav.description}</p>
                <p className="card-text pb-2">${fav.price}</p>
                <button 
                  onClick={() => handleCarts(fav.id)}
                  className="btn btn-primary"
                >
                  Sepete Ekle
                </button>
              </div>
              <span className="heart-icon">
                <i className="bi bi-heart-fill"></i> 
              </span>
            </div>
          ))
         : (
          <p>No favorites available</p>
        )}
      </div> 
      <Footer/>
    </>
  );
};

export default Favs;
