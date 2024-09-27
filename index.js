const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

import {
  editButton,
  miPopup,
  closeButton,
  saveButton,
  template,
  cardZone,
  buttonAddCard,
  cardPopup,
  formCardPopup,
  buttonCloseAddCard,
  popupImage,
  buttonClosePopupImage,
} from "./utils.js";

import Card from "./Card.js";

const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__description");
const profileText = document.querySelector(".profile__text");
const profileProfession = document.querySelector(".profile__profession");
const contenido = template.content;
const inputCardTitle = document.querySelector(".popup__card-title");
const inputUrl = document.querySelector(".popup__card-url");

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
