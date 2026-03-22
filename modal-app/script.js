const openModal = document.querySelector("#openModal");
const ModalElement = document.querySelector(".modal");
const ModalContentElement = document.querySelector(".modal_content");

openModal.addEventListener("click", () => {
  ModalElement.classList.add("open");
});
ModalContentElement.addEventListener("click", () => {
  ModalElement.classList.remove("open");
});
