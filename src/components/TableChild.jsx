import React from "react";

import { keyAbs, itemTotalPrice } from "../fetch/fetching";

function TableChild({ item, setIsChanging, isChanging }) {
  const [quantity, setQuantity] = React.useState(0);

  const handleQuantity = (e) => {
    setIsChanging(!isChanging);
    setQuantity(e.currentTarget.value);
  };

  return (
    <tr key={item.gid} className="tableChild">
      <td>{item.gid}</td>
      <td>{`${item.gname}`}</td>
      <td>{keyAbs(item.gprice)} р.</td>
      <td>
        <input
          type="number"
          className="table__input"
          defaultValue={quantity}
          onChange={handleQuantity}
        />
      </td>
      <td className="table__price-item">{itemTotalPrice(item, quantity)} р.</td>
    </tr>
  );
}

export default TableChild;
