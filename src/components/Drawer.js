function Draver(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={props.onClose}
            className="removeBtn"
            src="/images/btn-remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items">
          {props.items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/images/sneaker1.jpg"
                alt="sneaker"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/images/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/images/arrow-btn.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Draver;
