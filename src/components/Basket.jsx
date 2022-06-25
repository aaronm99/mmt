import React from "react";

import { MdClose } from "react-icons/md";
import { NumberInput } from "@mantine/core";

const Basket = ({ changeQuantity, cart, clearQuantity }) => {
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="basket__body">
      <div className="basket__items">
        {cart.map(cart => (
          <div className="item" key={cart.id}>
            <div className="item__name">{cart.name}</div>
            <NumberInput
              mt="sm"
              min={0}
              className="item__quantity"
              value={cart.quantity}
              onChange={event => changeQuantity(cart, event)}
            />
            <div className="item__details">
              <div className="item__price">
                ${(cart.quantity * cart.price).toFixed(2)}
              </div>
              <div className="item__delete">
                <MdClose />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="basket__checkout">
        <div className="total__price">${itemsPrice.toFixed(2)}</div>
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
