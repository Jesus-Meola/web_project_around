import { popupOverlay } from "../pages/index.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup__open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup__open");
    if (document.querySelectorAll(".popup__open").length === 0) {
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      const openPopups = document.querySelectorAll(".popup__open");
      openPopups.forEach((popup) => this.close(popup));
    }
  };

  setEventListeners() {
    this._popupElement
      .querySelector(".popup__button-closed")
      .addEventListener("click", () => {
        this.close();
      });

    popupOverlay.forEach((overlay) => {
      overlay.addEventListener("click", () => {
        overlay.parentNode.classList.remove("popup__open");
      });
    });
  }
}
