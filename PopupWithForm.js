export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this._popupElement.querySelector("form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(form);
    });
  }
}
