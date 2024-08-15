
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './components/Layout/MainLayout/MainLayout';
import Favs from "./components/Favs/Favs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ProductDetailsPage from "./components/Layout/ProductDetail/ProductDetailPage";

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    
      <Route index element={<MainLayout/>}/>
      <Route path="/favs" element={<Favs/>}/>
      <Route path="/detay/:id" element={<ProductDetailsPage/>}/>
      
    </Routes>
   
    </BrowserRouter>
  )
}

export default App
