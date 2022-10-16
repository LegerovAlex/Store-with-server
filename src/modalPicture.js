import { createElement } from "./createElement";
import { render } from "./render";

const createModalImg = () => {
  const footerModalContent = createElement("div", [], ["footer-modal-content"]);
  const footerModalInner = createElement(
    "div",
    [footerModalContent],
    ["footer-modal-inner"]
  );
  const footerModal = createElement(
    "div",
    [footerModalInner],
    ["footer-modal", "modal-none"]
  );

  return footerModal;
};

render(createModalImg(), ".footer-cards");

export function showPicture(event) {
  if (event.target.closest(".card-items") && !event.defaultPrevented) {
    const imgId = event.target.closest(".card").getAttribute("id");
    fetch(`https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS/${imgId}`)
      .then((res) => res.json())
      .then((imgCard) => {
        const footerModalContent = document.querySelector(
          ".footer-modal-content"
        );
        footerModalContent.style.backgroundImage = `url(${imgCard.img})`;
        const footerModal = document.querySelector(".footer-modal");
        footerModal.classList.remove("modal-none");
      });
  }
}

const footerModal = document.querySelector(".footer-modal");
footerModal.addEventListener("click", hidePicture);

function hidePicture(event) {
  if (event.target === footerModal) {
    footerModal.classList.add("modal-none");
  }
}
