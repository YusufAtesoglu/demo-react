import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import './Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartIds, setCartIds] = useState(JSON.parse(localStorage.getItem('cartIds')) || []);

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

  const removeFromCart = (productId) => {
    const updatedCartIds = cartIds.filter(id => id !== productId);
    setCartIds(updatedCartIds);
    localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
  };

  const cartProducts = products.filter(product => cartIds.includes(product.id));
 
  const cartCount=cartProducts.length;

  return (
    <> 
      <Header cartCount={cartCount} />
      <h2 className='pt-3'>SEPETİNİZ</h2><i className="bi bi-cart4"><span>{cartCount}</span></i>
      {cartProducts.length > 0 ? (
        <div className="cart-table-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Ürün Resmi</th>
                <th>Başlık</th>
                <th>Açıklama</th>
                <th>Fiyat</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((productItem) => (
                <tr key={productItem.id}>
                  <td data-label="Ürün Resmi">
                    <img src={productItem.image} alt={productItem.title} className="product-image" />
                  </td>
                  <td data-label="Başlık">{productItem.title}</td>
                  <td data-label="Açıklama">{productItem.description}</td>
                  <td data-label="Fiyat">${productItem.price}</td>
                  <td data-label="İşlemler">
                    <button 
                      className="btn btn-danger"
                      onClick={() => removeFromCart(productItem.id)}
                    >
                      Sepetten Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Sepetiniz boş.</p>
      )}
      <Footer/>
    </>
  );
}

export default Cart;
