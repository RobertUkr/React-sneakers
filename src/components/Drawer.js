function Draver({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            src="/images/btn-remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div
              key={obj.id}
              className={"cartItem d-flex align-center mb-20 111" + obj.id}
              data-id={obj.id}
            >
              <img
                className="mr-20"
                width={70}
                height={70}
                src={obj.imageUrl}
                alt="sneaker"
              />
              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
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
