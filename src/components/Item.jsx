import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { NumberInput } from "@mantine/core";

const Item = ({ name, quantity, price }) => {
  const [value, setValue] = useState(quantity);
  let total = (price * value).toFixed(2);

  const handleChange = e => {
    setValue(e);
  };

  return (
    <div className="item">
      <div className="item__name">{name}</div>
      <NumberInput
        mt="sm"
        min={0}
        className="item__quantity"
        value={value}
        onChange={e => handleChange(e)}
      />
      <div className="item__price">${total}</div>
      <div className="item__delete">
        <MdClose />
      </div>
    </div>
  );
};

export default Item;
