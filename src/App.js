import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Draver from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://611fb3e9988f860017ac43b5.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  },[]);


  const onAddToCart = (obj)=>{
    setCartItems([...cartItems, obj]);
  }

  

  return (
    <div className="wrapper">
      {cartOpened ? <Draver items = {cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => console.log(obj) }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
