import React from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "@mantine/form";
import { NumberInput } from "@mantine/core";

const Basket = () => {
  return (
    <div className="basket__body">
      <div className="basket__items">
        <div className="item">
          <div className="item__name">Mountain Dew</div>
          <NumberInput mt="sm" className="item__quantity" defaultValue={2} />
          <div className="item__price">$3.60</div>
          <div className="item__delete">
            <MdClose />
          </div>
        </div>
        <div className="item">
          <div className="item__name">Desperados</div>
          <NumberInput mt="sm" className="item__quantity" defaultValue={6} />
          <div className="item__price">$15.50</div>
          <div className="item__delete">
            <MdClose />
          </div>
        </div>
        <div className="item">
          <div className="item__name">Jack Daniels</div>
          <NumberInput mt="sm" className="item__quantity" defaultValue={4} />
          <div className="item__price">$13.40</div>
          <div className="item__delete">
            <MdClose />
          </div>
        </div>
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
