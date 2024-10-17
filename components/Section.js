export default class Section {
  constructor({ items, render }, containerSelector) {
    this._items = items;
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {}

  addItem(element) {
    this._container.append(element);
  }
}
