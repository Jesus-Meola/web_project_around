import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

import api from "../components/Api.js";

import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

export const template = document.querySelector(".template-card");
export const popupOverlay = document.querySelectorAll(".popup__overlay");
const cardZone = document.querySelector(".elements");
const editButton = document.querySelector(".profile__edit-button");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonEditAvatar = document.querySelector(".profile__image-edit");

const popupAvatar = new PopupWithForm("#popup-avatar", ({ link }) => {
  return api.editAvatar(link).then(() => {
    user.setAvatar(link);
    popupAvatar.close();
  });
});

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

const user = new UserInfo(
  ".profile__text",
  ".profile__profession",
  ".profile__image"
);

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  return api.editUser(inputs.name, inputs.description).then((data) => {
    user.setUserInfo(data.name, data.about, data.avatar);
  });
});

const popupCards = new PopupWithForm("#popup-card", (inputs) => {
  return api.saveCard(inputs.title, inputs.link).then((card) => {
    const currentUserId = card._id;
    const newCard = new Card(
      card,
      currentUserId,
      popupImage.open,
      api.likeCard,
      api.deleteLikeCard,
      onDelete
    ).generateCard();
    cardZone.prepend(newCard);
  });
});

popupProfile.setEventListeners();
popupCards.setEventListeners();

editButton.addEventListener("click", () => {
  popupProfile.open();
});

buttonAddCard.addEventListener("click", () => {
  popupCards.open();
});

api.getUserInfo().then((result) => {
  user.setUserInfo(result.name, result.about, result.avatar);
  const currentUserId = result._id;
  api.getCards().then((cards) => {
    const showCards = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = new Card(
            item,
            currentUserId,
            popupImage.open,
            api.likeCard,
            api.deleteLikeCard,
            onDelete
          ).generateCard();
          showCards.addItem(card);
        },
      },
      ".elements"
    );
    showCards.renderer();
  });
});

const onDelete = (cardId, callback) => {
  popupDeleteCard.open();
  popupDeleteCard.setAction(() => {
    api.deleteCard(cardId).then(() => {
      callback();
      popupDeleteCard.close();
    });
  });
};

const popupDeleteCard = new PopupWithConfirmation("#popup-delete");

popupDeleteCard.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

popupAvatar.setEventListeners();
