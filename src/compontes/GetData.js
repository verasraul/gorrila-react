import React, { useState } from "react";
import receipts from "../Data/data";
import Receipts from "./Receipts";

const GetData = () => {
  const [receipt, setReceipt] = useState(receipts);

  const order = receipt.map((item, index) => {
    return <Receipts {...item} key={index} />;
  });

  return <>{order}</>;
};

export default GetData;
