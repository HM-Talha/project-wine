import React from "react";
import WineBottle from "../../Assets/wineBottle.jpg";

import "./productCard.css";
function ProductCard() {
  return (
    <div>
      <section className="cardBox">
        <div className="cardImg">
          <img src={WineBottle} alt="" />
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="cardContent">
          <h5>
            Charles joguet-Chinon Cuvee <br /> terroi
          </h5>
          <p>2016 - Val De Laire - Chinon AOP</p>
          <h3>10,30 &euro;</h3>
          <p>Vendu par John Doe</p>
          <p>
            <i className="fa-solid fa-star"></i> 4.84 &#123;85&#125;
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
