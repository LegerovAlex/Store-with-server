import { CalcPriceWithSale } from "./CalcPriceWithSale";

export function addInfo(event) {
  if (event.target.closest(".card-items__button")) {
    event.preventDefault();
    const buttonId = event.target.getAttribute("id");

    fetch(`https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS/${buttonId}`)
      .then((res) => res.json())
      .then((dataCard) => {
        const mainJson = JSON.stringify({
          id: dataCard.id,
          title: dataCard.title,
          priceNow: CalcPriceWithSale(dataCard.priceLast, dataCard.sale),
        });
        localStorage.setItem(buttonId, mainJson);
      })
      .catch((err) => console.info("in fetch aPI", err));
  }
}
