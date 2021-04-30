let formData = new FormData();

export const fetchData = async () => {
  const req = await fetch("https://datainlife.ru/junior_task/get_products.php");
  const resp = await req.json();

  return resp;
};

export const sendData = async () => {
  const arr = document.querySelectorAll(".tableChild");
  const listArray = [].slice.call(arr);

  const product = {};

  listArray.map(
    (row) => (product[row.cells[0].innerText] = row.cells[3].firstChild.value)
  );

  formData.append("product", JSON.stringify(product));

  const req = await fetch("https://datainlife.ru/junior_task/add_basket.php", {
    method: "POST",
    body: formData,
  });

  const result = await req.json();

  console.log(result);
};

export const keyAbs = (el) => {
  return Math.round(Math.abs(el));
};

export const itemTotalPrice = (item, quantity) => {
  return keyAbs(item.gprice) * quantity;
};

export const totalPrice = (el) => {
  let sum = 0;
  el.map((item) => (sum += Number(item.innerText.slice(0, -3))));
  return sum;
};

export const totalCount = (el) => {
  let sum = 0;
  el.map((item) => (sum += Number(item.value)));
  return sum;
};
