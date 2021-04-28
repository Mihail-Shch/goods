let formData = new FormData();

export const fetchData = async () => {
  const req = await fetch("https://datainlife.ru/junior_task/get_products.php");
  const resp = await req.json();

  return resp;
};

export const sendData = async (el) => {
  const product = {};

  el.goods.map((g) => (product[g.gid] = keyAbs(g.gquantity)));

  formData.append(`product${el.rid}`, JSON.stringify(product));

  const req = await fetch("https://datainlife.ru/junior_task/add_basket.php", {
    method: "POST",
    body: formData,
  });

  const result = await req.json();
};

export const keyAbs = (el) => {
  return Math.round(Math.abs(el));
};

export const totalPrice = (el) => {
  return el.goods.reduce(
    (sum, g) => sum + keyAbs(g.gprice) * keyAbs(g.gquantity),
    0
  );
};

export const itemTotalPrice = (item, quantity) => {
  console.log("rly?");
  return keyAbs(item.gprice) * quantity;
};

export const totalCount = (el) => {
  return el.goods.reduce((sum, g) => sum + keyAbs(g.gquantity), 0);
};
