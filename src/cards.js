import { createElement } from "./createElement";
import { render } from "./render";
import { getDate } from "./store";
import { CalcPriceWithSale } from "./CalcPriceWithSale";
import { addInfo } from "./addInBasket";
import { showPicture } from "./modalPicture";
const createCard = ({ id, title, priceLast, sale, img }) => {
  const saleAttributeValue = createElement(
    "p",
    [document.createTextNode(sale)],
    ["card-items__sale"]
  );

  const cardItemsButton = createElement("button", [], ["card-items__button"], {
    id: Number(id),
  });

  const saleAttributeMinus = createElement(
    "p",
    [document.createTextNode("-")],
    []
  );

  const saleAttributePrecent = createElement(
    "p",
    [document.createTextNode("%")],
    []
  );

  const cardItemsSale = createElement(
    "div",
    [saleAttributeMinus, saleAttributeValue, saleAttributePrecent],
    ["card-sale"]
  );

  const cardItems = createElement(
    "div",
    [cardItemsSale, cardItemsButton],
    ["card-items"]
  );
  cardItems.style.backgroundImage = `url(${img})`;
  const cardPriceNow = createElement(
    "p",
    [
      document.createTextNode(CalcPriceWithSale(priceLast, sale)),
      document.createTextNode("$"),
    ],
    ["card-price__now"]
  );

  const cardPriceLast = createElement(
    "p",
    [document.createTextNode(priceLast), document.createTextNode("$")],
    ["card-price__last"]
  );
  const cardPrice = createElement(
    "div",
    [cardPriceNow, cardPriceLast],
    ["card-price"]
  );

  const cardName = createElement(
    "div",
    [document.createTextNode(title)],
    ["card__name"]
  );

  const card = createElement(
    "div",
    [cardItems, cardPrice, cardName],
    ["card"],
    {
      id: Number(id),
    }
  );

  return card;
};

getDate().then((cardStore) => {
  cardStore.map((cardData) =>
    render(createCard({ ...cardData }), ".footer-cards")
  );
  const itemsCard = document.querySelectorAll(".card-items");
  itemsCard.forEach((element) => {
    element.addEventListener("click", addInfo);
  });
  const itemsCards = document.querySelectorAll(".card-items");
  itemsCards.forEach((element) => {
    element.addEventListener("click", showPicture);
  });
});
