const inputSearch = document.querySelector(".header-search");

inputSearch.addEventListener("input", SearchItems);

function SearchItems(event) {
  const cardsName = document.querySelectorAll(".card__name");
  cardsName.forEach(function (element) {
    const parent = element.closest(".card");
    if (element.textContent.search(event.target.value.trim()) === -1) {
      parent.classList.add("hide");
      console.log(parent);
    } else {
      parent.classList.remove("hide");
    }
  });
}
