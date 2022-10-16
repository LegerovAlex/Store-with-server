import { createElement } from "./createElement";
import { render } from "./render";

const modal = document.querySelector(".modal");
const button = document.querySelector(".header__btn");

button.addEventListener("click", showModal);
button.addEventListener("click", getDataForBucket);
function showModal() {
  modal.classList.remove("modal-none");
}

modal.addEventListener("click", hideModal);
modal.addEventListener("click", hideItems);
function hideModal(event) {
  if (event.target === modal) {
    modal.classList.add("modal-none");
  }
}

function getDataForBucket() {
  const basketItems = { ...localStorage };
  for (key in basketItems) {
    render(CreateBasketInfo(JSON.parse(basketItems[key])), ".modal-list");
  }
  calcPrice();
}

function hideItems(event) {
  const basketList = document.querySelector(".modal-list");
  if (event.target === modal) {
    basketList.innerHTML = "";
  }
}

const CreateBasketInfo = ({ title, priceNow }) => {
  const modalItemsName = createElement(
    "p",
    [document.createTextNode(title)],
    ["modal-items__name"]
  );

  const modalItemsPrice = createElement(
    "p",
    [document.createTextNode(priceNow), document.createTextNode("$")],
    ["modal-items__price"]
  );
  const modalItems = createElement(
    "div",
    [modalItemsName, modalItemsPrice],
    ["modal-items"]
  );

  return modalItems;
};

const buttonDelete = document.querySelector(".modal-header__btn");
buttonDelete.addEventListener("click", clearBasket);

function clearBasket(event) {
  const finalPrice = document.querySelectorAll(".modal-total__price");
  const basketList = document.querySelector(".modal-list");
  if (event.target === buttonDelete) {
    basketList.innerHTML = "";
    localStorage.clear();
    finalPrice[0].innerText = 0 + "$";
  }
}

function calcPrice() {
  const cardItem = document.querySelectorAll(".modal-items");
  const finalPrice = document.querySelectorAll(".modal-total__price");

  let totalPrice = 0;
  cardItem.forEach(function (item, index) {
    const priceElement = document.querySelectorAll(".modal-items__price");
    const price = priceElement[index].innerText;
    totalPrice += parseInt(price);
  });

  finalPrice[0].innerText = totalPrice + "$";
}
