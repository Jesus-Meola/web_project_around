import { template } from "./index.js";
import { handleEscapeKey, popupImage } from "./utils.js";

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".elements__card");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".elements__image");
    this._cardTitle = this._card.querySelector(".elements__title");
    this._buttonDeleteCard = this._card.querySelector(".elements__image-trash");
    this._buttonLike = this._card.querySelector(".elements__image-like");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
  }

  handleLike() {
    this._buttonLike.classList.toggle("elements__image-like_active");
  }
  openPopup() {
    popupImage.classList.add("popup__open");
  }

  handleImage() {
    this.openPopup();
    this._popupPhoto = popupImage.querySelector(".popup__image-photo");
    this._popupTitle = popupImage.querySelector(".popup__image-name");

    this._popupPhoto.src = this._link;
    this._popupTitle.textContent = this._name;
  }

  setEventListeners() {
    this._buttonDeleteCard.addEventListener("click", () => {
      this._card.remove();
    });
    this._buttonLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._cardImage.addEventListener("click", () => {
      document.addEventListener("keydown", handleEscapeKey);
      this.handleImage();
    });
  }

  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}
