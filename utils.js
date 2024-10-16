import {
  nameInput,
  jobInput,
  profileText,
  profileProfession,
} from "./index.js";

export const editButton = document.querySelector(".profile__edit-button");
const miPopup = document.querySelector(".popup");
export const closeButton = document.querySelector(".popup__button-closed");
const saveButton = document.querySelector(".popup__button-create");
const buttonAddCard = document.querySelector(".profile__add-button");
export const cardPopup = document.querySelector("#popup-card");
const buttonCloseAddCard = document.querySelector(".popup__card-button-closed");
export const popupImage = document.querySelector("#popup-image");
const buttonClosePopupImage = document.querySelector(
  ".popup__image-button-closed"
);

// editButton.addEventListener("click", () => {
//   openPopup(miPopup);
// });

// closeButton.addEventListener("click", () => {
//   closePopup(miPopup);
// });

saveButton.addEventListener("click", saveChanges);

buttonAddCard.addEventListener("click", () => {
  openPopup(cardPopup);
});

buttonCloseAddCard.addEventListener("click", () => {
  closePopup(cardPopup);
});

function saveChanges() {
  profileText.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(miPopup);
}

function openPopup(popup) {
  popup.classList.add("popup__open");
  document.addEventListener("keydown", handleEscapeKey);
}

export function closePopup(popup) {
  popup.classList.remove("popup__open");
  if (document.querySelectorAll(".popup__open").length === 0) {
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

// export function handleEscapeKey(evt) {
//   if (evt.key === "Escape") {
//     const openPopups = document.querySelectorAll(".popup__open");
//     openPopups.forEach((popup) => closePopup(popup));
//   }
// }

buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupImage);
});
