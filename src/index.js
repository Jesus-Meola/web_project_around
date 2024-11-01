import "./pages/index.css";

import Card from "./components/Card.js";

import FormValidator from "./components/FormValidator.js";

import PopupWithForm from "./components/PopupWithForm.js";

import PopupWithImage from "./components/PopupWithImage.js";

import Section from "./components/Section.js";

import UserInfo from "./components/UserInfo.js";

import api from "./components/Api.js";

export const template = document.querySelector(".template-card");
export const popupOverlay = document.querySelectorAll(".popup__overlay");
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

const User = new UserInfo(
  ".profile__text",
  ".profile__profession",
  ".profile__image"
);

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  User.setUserInfo(inputs.name, inputs.description);
});

const popupCards = new PopupWithForm("#popup-card", (inputs) => {
  const newCard = new Card(
    inputs.title,
    inputs.link,
    popupImage.open
  ).generateCard();
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

// const showCards = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       const card = new Card(
//         item.name,
//         item.link,
//         popupImage.open
//       ).generateCard();
//       showCards.addItem(card);
//     },
//   },
//   ".elements"
// );

// showCards.renderer();

let showCards = null;

api.getUserInfo().then((result) => {
  User.setUserInfo(result.name, result.about);
  User.setAvatar(result.avatar);
});

api.getCards().then((cards) => {
  showCards = new Section(
    {
      items: cards,
      renderer: (item) => {
        const card = new Card(
          item.name,
          item.link,
          popupImage.open
        ).generateCard();
        showCards.addItem(card);
      },
    },
    ".elements"
  );
  showCards.renderer();
});
