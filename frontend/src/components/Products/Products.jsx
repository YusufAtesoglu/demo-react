import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = ({ selectedCategory }) => {
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

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <section className="products pt-3">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper justify-content-center pt-3 ">
            {filteredProducts.map((product) => (
              <ProductItem productItem={product} key={product.id} />
            ))}
            <div className="glide__arrows"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
