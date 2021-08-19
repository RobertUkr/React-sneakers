function Header(){
    return(
        <header className="d-flex justify-between align-center p-40 ">
        <div className="d-flex align-center">
          <img
            className="header__logo"
            width={40}
            height={40}
            src="/images/logo.png"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовки</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li className="mr-30">
              <img
                className="mr-10"
                width={18}
                height={18}
                src="/images/cart.svg"
              />
              <span>1205 руб.</span>
            </li>
            <li className="mr-20">
              <img width={21} height={20} src="/images/heart.svg" />
            </li>
            <li>
              <img width={20} height={20} src="/images/user.svg" />
            </li>
          </ul>
        </div>
      </header>

    );
}

export default Header