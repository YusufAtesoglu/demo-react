import ProductDetails from "./ProductDetails"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();
  
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }
        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchSingleProduct();
  }, [productId]);

 
  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} setSingleProduct={setSingleProduct} />
  ) : (
    <p>Ürün Yükleniyor</p>
  );
}

export default ProductDetailsPage