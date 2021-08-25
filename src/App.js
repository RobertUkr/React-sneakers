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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const itemsResponse = await axios.get(
        "https://611fb3e9988f860017ac43b5.mockapi.io/items"
      );

      const cartResponse = await axios.get(
        "https://611fb3e9988f860017ac43b5.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://611fb3e9988f860017ac43b5.mockapi.io/favorites"
      );
      setIsLoading(false)
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://611fb3e9988f860017ac43b5.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://611fb3e9988f860017ac43b5.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://611fb3e9988f860017ac43b5.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://611fb3e9988f860017ac43b5.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://611fb3e9988f860017ac43b5.mockapi.io/favorites",
          obj
        );
        axios.post(
          "https://611fb3e9988f860017ac43b5.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch {
      alert("Не удалось добавить в фавориты");
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
          cartItems={setCartItems}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
