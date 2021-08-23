import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40 ">
      
        <div className="d-flex align-center">
        <Link to="/">
          <img
            className="header__logo"
            width={40}
            height={40}
            src="/images/logo.png"
            alt="header-logo"
          />
          </Link>
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовки</p>
          </div>
        </div>
   
      <div>
        <ul className="headerRight">
          <li onClick={props.onClickCart} className="mr-30">
            <img
              className="mr-10"
              width={18}
              height={18}
              src="/images/cart.svg"
              alt="cart"
            />
            <span>1205 руб.</span>
          </li>
          <li className="mr-20">
            <Link to="/favorites">
              {" "}
              <img
                width={21}
                height={20}
                src="/images/heart.svg"
                alt="heart-icon"
              />
            </Link>
          </li>
          <li>
            <img
              width={20}
              height={20}
              src="/images/user.svg"
              alt="user-icon"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
