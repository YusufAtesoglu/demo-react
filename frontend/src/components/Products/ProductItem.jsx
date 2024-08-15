
import { Link } from "react-router-dom";
import "./ProductItem.css"
import React from 'react'
const ProductItem = ({productItem}) => {


const handleFavs = () => {
  const productId = productItem.id; // Tıklanan ürünün ID'sini al
  let storedFavIds = JSON.parse(localStorage.getItem('favIds')) || []; // Mevcut favori ID'leri al veya boş dizi oluştur

  if (!storedFavIds.includes(productId)) {
    storedFavIds.push(productId); // Eğer ID daha önce eklenmediyse, ekle
    localStorage.setItem('favIds', JSON.stringify(storedFavIds)); // Güncellenmiş favori ID'leri kaydet
  }
};


 return (<React.Fragment>
    <div className="card" style={{width:'18rem'}}>
    <img src={productItem.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{productItem.title}</h5>
      <p className="card-text">{productItem.description}</p>
      <p className="card-price pb-2">${productItem.price}</p>
      <Link to={`detay/${productItem.id}`} className="btn btn-primary">Sepete Ekle</Link>
    </div>
    <span className="heart-icon">
    <i className="bi bi-heart-fill" onClick={handleFavs} ></i> 
  </span>
  </div>
             
  </React.Fragment>
  )
}

export default ProductItem
