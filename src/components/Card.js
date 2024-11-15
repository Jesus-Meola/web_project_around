import { template } from "../index.js";

export default class Card {
  constructor(
    data,
    currentUser,
    handleCardClick,
    handleLikeCard,
    handleDislikeCard,
    handleDeleteCard
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this.owner = data.owner;
    this.currentUser = currentUser;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
    this._handleDeleteCard = handleDeleteCard;
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
    if (this.owner._id !== this.currentUser) {
      this._buttonDeleteCard.style.display = "none";
    }
    // if (this._likes.some((like) => like._id === this.currentUser)) {
    //   this._buttonLike.classList.add("elements__image-like_active");
    // }
  }

  handleLike() {
    this._handleLikeCard();
    this._buttonLike.classList.toggle("elements__image-like_active");
  }

  setEventListeners() {
    this._buttonDeleteCard.addEventListener("click", () => {
      this._card.remove();
    });
    this._buttonLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}
