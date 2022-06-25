import React, { useState } from "react";

const Currency = ({ currency, setCurrency }) => {
  return (
    <div>
      <select
        name="pets"
        id="pet-select"
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
