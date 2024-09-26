import {
  initialCards,
  editButton,
  miPopup,
  closeButton,
  nameInput,
  jobInput,
  saveButton,
  profileText,
  profileProfession,
  template,
  cardZone,
  contenido,
  buttonAddCard,
  cardPopup,
  formCardPopup,
  inputCardTitle,
  inputUrl,
  buttonCloseAddCard,
  popupImage,
  buttonClosePopupImage,
} from "./utils.js";

import Card from "./Card.js";

editButton.addEventListener("click", () => {
  openPopup(miPopup);
});

closeButton.addEventListener("click", () => {
  closePopup(miPopup);
});

saveButton.addEventListener("click", saveChanges);

buttonAddCard.addEventListener("click", () => {
  openPopup(cardPopup);
});

buttonCloseAddCard.addEventListener("click", () => {
  closePopup(cardPopup);
});

function openPopup(popup) {
  popup.classList.add("popup__open");
  document.addEventListener("keydown", handleEscapeKey);
}

function closePopup(popup) {
  popup.classList.remove("popup__open");
  if (document.querySelectorAll(".popup__open").length === 0) {
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

export function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openPopups = document.querySelectorAll(".popup__open");
    openPopups.forEach((popup) => closePopup(popup));
  }
}

function saveChanges() {
  profileText.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(miPopup);
}

// function cardAdd(name, link) {
//   const card = template
//     .cloneNode(true)
//     .content.querySelector(".elements__card");
//   const cardImage = card.querySelector(".elements__image");
//   const buttonDeleteCard = card.querySelector(".elements__image-trash");
//   const cardTitle = card.querySelector(".elements__title");
//   const buttonLike = card.querySelector(".elements__image-like");

//   buttonDeleteCard.addEventListener("click", function () {
//     card.remove();
//   });
//   buttonLike.addEventListener("click", function () {
//     buttonLike.classList.toggle("elements__image-like_active");
//   });

//   cardImage.addEventListener("click", function () {
//     openPopup(popupImage);
//     const popupPhoto = popupImage.querySelector(".popup__image-photo");
//     const popupTitle = popupImage.querySelector(".popup__image-name");

//     popupPhoto.src = link;
//     popupTitle.textContent = name;
//     cardImage.alt = name;
//   });

//   cardImage.src = link;
//   cardTitle.textContent = name;
//   cardImage.alt = name;
//   return card;
// }

// initialCards.forEach(function (element) {
//   const newCard = cardAdd(element.name, element.link);
//   cardZone.append(newCard);
// });

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link).generateCard();
  cardZone.append(newCard);
});

editButton.addEventListener("click", function () {
  openPopup(miPopup);
});

closeButton.addEventListener("click", function () {
  closePopup(miPopup);
});

formCardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const cardToAdd = cardAdd(inputCardTitle.value, inputUrl.value);
  cardZone.prepend(cardToAdd);

  closePopup(cardPopup);
});

buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupImage);
});
