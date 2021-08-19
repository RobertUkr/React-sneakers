function Card() {
  return (
    <div className="card">
      <img width={133} height={112} src="/images/sneaker2.jpg" alt="sneaker" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img
            width={11}
            height={11}
            src="/images/button-plus.svg"
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card