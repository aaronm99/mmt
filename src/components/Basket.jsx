import React, { useState } from "react";
import Item from "./Item";
import { items } from "../data";

const Basket = () => {
  return (
    <div className="basket__body">
      <div className="basket__items">
        {items.map(items => (
          <Item
            name={items.name}
            quantity={items.quantity}
            price={items.price}
          />
        ))}
      </div>
      <div className="basket__checkout">
        <div className="total__price">$32.50</div>
        <div className="checkout__buttons">
          <button className="clear__btn">Clear</button>
          <button className="checkout__btn">Check Out {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
