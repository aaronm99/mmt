import React from "react";

const Basket = () => {
  return (
    <div className="basket__body">
      <div className="item">
        <div className="item__name">Mountain Dew</div>
        <div className="item__quantity">2</div>
        <div className="item__price">$3.60</div>
        <div className="item__delete">x</div>
      </div>
      <div className="item">
        <div className="item__name">Desperados</div>
        <div className="item__quantity">6</div>
        <div className="item__price">$15.50</div>
        <div className="item__delete">x</div>
      </div>
      <div className="item">
        <div className="item__name">Jack Daniels</div>
        <div className="item__quantity">4</div>
        <div className="item__price">$13.40</div>
        <div className="item__delete">x</div>
      </div>
      <div className="basket__checkout">
        <div className="total__price">$32.50</div>
        <div className="clear__btn">Clear</div>
        <div className="checkout__btn">Check Out {">"}</div>
      </div>
    </div>
  );
};

export default Basket;
