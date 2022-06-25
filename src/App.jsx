import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import { items } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(items);
  }, []);

  const changeQuantity = (drink, quantity) => {
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
      />
    </div>
  );
}

export default App;
