import React from "react";

import { Table } from "react-bootstrap";
import { TableChild } from "../components";

function Home({ items }) {
  return (
    <div className="table__wrapper">
      {items.map((item) => (
        <Table striped bordered hover key={`${item.rid}`}>
          <tbody>
            <tr>
              <td colSpan="5" className="table__title">
                {item.rname}
              </td>
            </tr>
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
      ))}
    </div>
  );
}

export default Home;
