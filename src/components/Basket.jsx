import React from "react";
import { MdClose } from "react-icons/md";

const Basket = ({ changeQuantity, cart, clearQuantity, currency }) => {
  // calculate grand total
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  // default currency
  let modifier = 1;
  let symbol = "$";

  // currency conversion
  if (currency == "pound") {
    modifier = 0.815361;
    symbol = "£";
  } else if (currency == "euros") {
    modifier = 0.94733575;
    symbol = "€";
  }

  return (
    <div className="basket__body">
      <div className="basket__items">
        {cart.map(cart => (
          <div className="item" key={cart.id}>
            <div className="item__name">{cart.name}</div>
            <input
              min={0}
              max={99}
              type="number"
              className="item__quantity"
              value={cart.quantity}
              onChange={event => changeQuantity(cart, event.target.value)}
            />
            <div className="item__details">
              <div className="item__price">
                {symbol}
                {(cart.quantity * cart.price * modifier).toFixed(2)}
              </div>
              <div className="item__delete">
                <MdClose />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="basket__checkout">
        <div className="total__price">
          {symbol}
          {(itemsPrice * modifier).toFixed(2)}
        </div>
        <div className="checkout__buttons">
          <button className="clear__btn" onClick={clearQuantity}>
            Clear
          </button>
          <button className="checkout__btn">Check Out {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
