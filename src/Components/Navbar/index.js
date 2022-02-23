import "./navbar.css";
import Logo from "../../Assets/logo.PNG";

const Navbar = () => {
  return (
    <div className="navParent ">
      <nav className="navBar">
        <ul>
          <li>Achetur Do Vin</li>
          <li>Vendre Du Vin</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>
            <i className="fa-solid fa-user"></i>Mon compte
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>Mes messages
          </li>
          <li>
            <i className="fa-solid fa-heart"></i>WishList
          </li>
          <li>
            FR<i className="fa-solid fa-sort-down"></i>
          </li>
        </ul>
      </nav>
      <section className="bottomNav mt-3">
        <div className="logoBox">
          <img src={Logo} alt="" />
        </div>

        <div className="input-group mb-3 inputBox">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
