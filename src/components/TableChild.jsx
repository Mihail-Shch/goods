import React from "react";

import { keyAbs, itemTotalPrice } from "../fetch/fetching";

function TableChild({ item }) {
  const [quantity, setQuantity] = React.useState(keyAbs(item.gquantity));

  const handleQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  };

  return (
    <tr key={item.gid}>
      <td>{item.gid}</td>
      <td>{`${item.gname}`}</td>
      <td>{keyAbs(item.gprice)} р.</td>
      <td>
        <input
          type="number"
          defaultValue={quantity}
          onChange={handleQuantity}
        />
      </td>
      <td>{itemTotalPrice(item, quantity)} р.</td>
    </tr>
  );
}

export default TableChild;
