const editButton = document.querySelector(".profile__edit-button");
const miPopup = document.querySelector(".popup");

editButton.addEventListener("click", openPopup);

function openPopup() {
  miPopup.style.display = "flex";
}
