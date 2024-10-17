import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = (name, link) => {
    super.open();
    const imageNode = this._popupElement.querySelector(".popup__image-photo");
    imageNode.src = link;
    imageNode.alt = name;
    const titleNode = this._popupElement.querySelector(".popup__image-name");
    titleNode.textContent = name;
  };
}
