import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css"
const Footer =()=>{
    return(
      <React.Fragment>
      <Policy/>
        <footer className="footer">
        <div className="copyright-row ">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Copyright 2022 © E-Commerce Theme. All right reserved. Powered by Yusuf Ateşoğlu.
                </p>
              </div>
              <a href="#">
               <img src="/img/footer/cards.png" alt=""/>
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Returns Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </React.Fragment>
    )
}

export default Footer;