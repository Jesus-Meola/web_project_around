import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    const imageNode = this._popupElement.querySelector("img");
    imageNode.src = link;
    imageNode.alt = name;
    const titleNode = this._popupElement.querySelector("p");
    titleNode.textContent = name;
  }
}
