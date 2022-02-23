import "./style.css";
import WineBottle from "../images/wineBottle.jpg";
const Card = () => {
  return (
    <section>
      <div className="container-fluid cardParent mt-4 mb-4"
        style={{
          padding: 10
        }}
      >
        <div className="row">
          <div className="col-sm-8 col-md-5 col-lg-3">
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
          <div className="col-sm-8 col-md-5 col-lg-3">
            {" "}
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
          <div className="col-sm-8 col-md-5 col-lg-3">
            {" "}
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
          <div className="col-sm-8 col-md-5 col-lg-3">
            {" "}
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
        </div>
      </div>
    </section>
  );
};

export default Card;
