var element = document.getElementById('buyIt');

element.onclick = () => {
  let item = document.getElementsByClassName("item-title")[0].textContent;
  alert(`GENIAL!!! Compraste ${item} en Mercado Libre Front-End Test!!!`);
};
