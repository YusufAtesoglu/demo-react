import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ setSelectedCategory }) => {

  const filterProduct = (category) => {console.log("Header received setSelectedCategory:", setSelectedCategory);
    console.log(category)
    setSelectedCategory(category);
  };
  

  return (
    <div className="container-sm"> 
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand pl-4" style={{color:'#5628',font:'message-box'}} href="/">Atesoglu</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => filterProduct("")}>Ana Sayfa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favs">Favoriler</Link>
              </li>
              <li className="nav-item">
              <nav>
      <Link to="/" onClick={() => filterProduct("men's clothing")}>Erkek Kıyafetleri</Link>
    </nav>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sepet</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
