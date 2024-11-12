class Api {
  constructor(url, token) {
    this.baseUrl = url;
    this.token = token;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Èrror: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.token,
    }).then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.token,
    }).then(this._checkResponse);
  }

  saveCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.token,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  editUser(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.token,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  likeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.token,
    }).then(this._checkResponse);
  }

  deleteLikeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.token,
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.token,
    }).then(this._checkResponse);
  }
}

const api = new Api("https://around.nomoreparties.co/v1/web-es-cohort-17", {
  authorization: "d453e3ac-8a06-4028-85b5-cd9f1421891b",
  "Content-Type": "application/json",
});

export default api;
