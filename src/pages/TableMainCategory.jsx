import React from "react";

import { Table } from "react-bootstrap";
import TableChild from "../components/TableChild";
import { totalPrice, totalCount, sendData } from "../fetch/fetching";

function TableMainCategory({ items, category }) {
  const [inputs, setInputs] = React.useState([]);
  const [priceFields, setPriceFields] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isChanging, setIsChanging] = React.useState(false);
  const item = items[category];

  React.useEffect(() => {
    const listOfInputs = document.querySelectorAll(".table__input");
    const listArray = [].slice.call(listOfInputs);
    const listOfPriceFields = document.querySelectorAll(".table__price-item");
    const PriceFieldsArray = [].slice.call(listOfPriceFields);
    setPriceFields(PriceFieldsArray);
    setInputs(listArray);
    setIsLoaded(true);
  }, [item, isChanging]);

  const onClickBtn = () => {
    sendData(item);
  };

  return (
    <div className="table__wrapper">
      {item && (
        <div>
          <Table striped bordered hover key={`${item.rid}`}>
            <tbody>
              <tr>
                <td>Id</td>
                <td>Название товара</td>
                <td>Цена</td>
                <td>Количество</td>
                <td>Сумма</td>
              </tr>
              {item.goods.map((item) => (
                <TableChild
                  key={`${item.guantity} + ${item.gid}`}
                  item={item}
                  isChanging={isChanging}
                  setIsChanging={setIsChanging}
                />
              ))}
            </tbody>
          </Table>
          <div>
            <span className="table__count">
              Общее количество товаров: {""}
              {isLoaded && totalCount(inputs)}
            </span>
            <span className="table__count">
              Общая стоимость: {""}
              {isLoaded && totalPrice(priceFields)}
            </span>
            <button className="btn btn-dark" onClick={onClickBtn}>
              В корзину
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableMainCategory;
