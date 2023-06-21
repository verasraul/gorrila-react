import React, { useState } from "react";

import "./Receipts.css";

const Receipts = ({ person, order, paid }) => {
  const [pill, setPill] = useState(paid);
  const chackPill = () => {
    setPill((pill) => (pill ? "paid" : "notPid"));
  };
  const { sauce, main, protein, rice, cost, drink, toppings } = order;

  return (
    <div className="continer">
      <div className="each-person">
        <h1> {person.toUpperCase()}</h1>
        <h3>
          <div className="div-menu">Main</div> :{main}
        </h3>
        <h3>
          <div className="div-menu">protein </div>:{protein}
        </h3>
        <h3>
          <div className="div-menu">Rice </div> :{rice}
        </h3>
        <h3>
          <div className="div-menu"> Sauce </div>:{sauce}
        </h3>
        <h3>
          <div className="div-menu">Drink</div>:{drink}
        </h3>
        <h3>
          <div className="div-menu">Toppings</div>: {toppings}
        </h3>
        <h3>
          <div className="div-menu">Cost </div>:{cost}
        </h3>
        <button onClick={chackPill}> Paid ?</button>
        <h3> {pill}</h3>
      </div>
    </div>
  );
};

export default Receipts;
