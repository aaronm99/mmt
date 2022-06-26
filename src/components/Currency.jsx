import React from "react";

const Currency = ({ setCurrency }) => {
  return (
    <div>
      <select
        name="currency"
        id="currency-select"
        className="currency__select"
        onChange={e => {
          const selectedCurrency = e.target.value;
          setCurrency(selectedCurrency);
        }}
      >
        <option value="dollar">$</option>
        <option value="pound">£</option>
        <option value="euros">€</option>
      </select>
    </div>
  );
};

export default Currency;
