import Favs from "../../Favs/Favs"
import Products from "../../Products/Products"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { useState } from "react"

const MainLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  

  return (
    <div className="main-layout container-xs">
      
      <Header setSelectedCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
      <Footer/>
    </div>
  )
}

export default MainLayout
