import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Draver from "./components/Drawer";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://611fb3e9988f860017ac43b5.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://611fb3e9988f860017ac43b5.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://611fb3e9988f860017ac43b5.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://611fb3e9988f860017ac43b5.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://611fb3e9988f860017ac43b5.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj => favObj.id === obj.id))) {
      axios.delete(
        `https://611fb3e9988f860017ac43b5.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const {data} = await axios.post("https://611fb3e9988f860017ac43b5.mockapi.io/favorites", obj)
      axios.post("https://611fb3e9988f860017ac43b5.mockapi.io/favorites", obj);
      setFavorites((prev) => [...prev, data]);
    }
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Draver
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
