import React, { useState } from "react";
import receipts from "../Data/data";
import Receipts from "./Receipts";

const GetData = () => {
  const [receipt, setReceipt] = useState(receipts);

<<<<<<< HEAD
  const order = receipt.map((item, index) => {
    return <Receipts {...item} key={index} />;
  });

  return <>{order}</>;
=======
  const order = receipts.map((item, index) => {
    return <Receipts {...item} key={index} />;
  });

  return <div>{order}</div>;
>>>>>>> 42c070d (done with javascript part)
};

export default GetData;
