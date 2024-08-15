
import Info from "./Info";

const ProductDetails =  ({ singleProduct }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
        
          <div className="single-content">
            <main className="site-main">
            
             <Info singleProduct={singleProduct} />
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
