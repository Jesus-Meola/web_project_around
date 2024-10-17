import Card from "./components/Card.js";

import FormValidator from "./components/FormValidator.js";

import PopupWithForm from "./components/PopupWithForm.js";

import PopupWithImage from "./components/PopupWithImage.js";

export const template = document.querySelector(".template-card");
export const popupOverlay = document.querySelectorAll(".popup__overlay");
const profileText = document.querySelector(".profile__text");
const profileProfession = document.querySelector(".profile__profession");
const cardZone = document.querySelector(".elements");
const editButton = document.querySelector(".profile__edit-button");
const buttonAddCard = document.querySelector(".profile__add-button");

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

const popupImage = new PopupWithImage("#popup-image");

popupImage.setEventListeners();

initialCards.forEach(function (element) {
  const newCard = new Card(
    element.name,
    element.link,
    popupImage.open
  ).generateCard();
  cardZone.append(newCard);
});

const formProfile = new FormValidator(".popup__profile-form", {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
});

const formCard = new FormValidator(".popup__card-form", {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error-visible",
});

formProfile.enableValidation();
formCard.enableValidation();

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  profileText.textContent = inputs.name;
  profileProfession.textContent = inputs.description;
});

const popupCards = new PopupWithForm("#popup-card", (inputs) => {
  const newCard = new Card(inputs.title, inputs.link).generateCard();
  cardZone.prepend(newCard);
});

popupProfile.setEventListeners();
popupCards.setEventListeners();

editButton.addEventListener("click", () => {
  popupProfile.open();
});

buttonAddCard.addEventListener("click", () => {
  popupCards.open();
});
