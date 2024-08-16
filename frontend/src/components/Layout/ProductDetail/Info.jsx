import Header from "../Header/Header"
import "./Info.css"



const Info = ({singleProduct}) => {
  

  return ( <> 
  <Header/>
    <div className="product-info">
<div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="card align-items-center" style={{width:'18rem'}}>
    <img src={singleProduct.image} className="card-img-top" alt="..."/>
    <span className="heart-icon">
    <i className="bi bi-heart-fill"  ></i> 
  </span><div className="price pt-3"><strong className="new-price pt-4">${singleProduct.price}</strong> </div>  
  </div>
    </div>
    <div className="col">
    <p>{singleProduct.description}</p>
  
 <div className="button addtocart pt-5"><button className="btn btn-primary mt-2">Sepete Ekle</button></div> 
    </div>
  </div>

</div>
    </div></>
  )
}

export default Info
