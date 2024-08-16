import Header from "../Header/Header"
import "./Info.css"

const Info = ({ singleProduct }) => {

  const handleCarts = (product) => {
    let storedCartIds = JSON.parse(localStorage.getItem('cartIds')) || []; // Mevcut sepet ID'lerini al veya boş dizi oluştur
    
    if (!storedCartIds.includes(product.id)) {
      storedCartIds.push(product.id); // Eğer ID daha önce eklenmediyse, ekle
      localStorage.setItem('cartIds', JSON.stringify(storedCartIds)); // Güncellenmiş sepet ID'lerini kaydet
    }
  };

  return (
    <> 
      <Header />
      <div className="product-info">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card align-items-center" style={{ width: '18rem' }}>
                <img src={singleProduct.image} className="card-img-top" alt="..." />
                <span className="heart-icon">
                  <i className="bi bi-heart-fill"></i>
                </span>
                <div className="price pt-3">
                  <strong className="new-price pt-4">${singleProduct.price}</strong>
                </div>
              </div>
            </div>
            <div className="col">
              <p>{singleProduct.description}</p>
              <div className="button addtocart pt-5">
                <button 
                  className="btn btn-primary mt-2" 
                  onClick={() => handleCarts(singleProduct)} // Sepete ekleme fonksiyonunu burada çağırın
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;
