class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup__open");
  }
  close() {
    this._popupElement.classList.remove("popup__open");
  }
  escClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  clickOutside() {}
  setEventListeners() {}
}

const popupProfile = new Popup("#popup-profile");

editButton.addEventListener("click", () => {
  popupProfile.open();
});

closeButton.addEventListener("click", () => {
  popupProfile.close();
});
