import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import Currency from "./components/Currency";
import { items } from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState("");

  // sets the basket to the data from data.js
  useEffect(() => {
    setCart(items);
  }, []);

  // function to change quantity
  const changeQuantity = (drink, quantity) => {
    // max quantity is 99
    if (quantity > 99) {
      setCart(
        cart.map(item =>
          item.id === drink.id
            ? {
                ...item,
                quantity: 99,
              }
            : item
        )
      );
    } else {
      setCart(
        cart.map(item =>
          item.id === drink.id
            ? {
                ...item,
                quantity: +quantity,
              }
            : item
        )
      );
    }
  };

  // sets all quantities to 0
  const clearQuantity = () => {
    setCart(
      cart.map(item =>
        item.id !== 0
          ? {
              ...item,
              quantity: 0,
            }
          : item
      )
    );
  };

  return (
    <div className="App">
      <Basket
        changeQuantity={changeQuantity}
        cart={cart}
        items={items}
        clearQuantity={clearQuantity}
        currency={currency}
      />
      <Currency currency={currency} setCurrency={setCurrency} />
    </div>
  );
}

export default App;
