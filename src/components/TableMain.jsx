import React from "react";

import { Table } from "react-bootstrap";
import TableChild from "./TableChild";
import { totalPrice, totalCount, sendData } from "../fetch/fetching";

function TableMain({ items, category }) {
  const item = items[category];

  const onClickBtn = () => {
    sendData(item);
  };

  return (
    <div className="table__wrapper">
      <Table striped bordered hover>
        <tbody key={`${item.rid}`}>
          <tr>
            <td>Id</td>
            <td>Название товара</td>
            <td>Цена</td>
            <td>Количество</td>
            <td>Сумма</td>
          </tr>
          {item.goods.map((item) => (
            <TableChild key={`${item.guantity} + ${item.gid}`} item={item} />
          ))}
        </tbody>
      </Table>
      <div>
        <span className="table__count">
          Общее количество товаров: {""}
          {totalCount(item)}
        </span>
        <span className="table__count">
          Общая стоимость: {""}
          {totalPrice(item)}
        </span>
        <button className="btn btn-dark" onClick={onClickBtn}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default TableMain;
