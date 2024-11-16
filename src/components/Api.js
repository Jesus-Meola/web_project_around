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

  editAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.token,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkResponse);
  }

  likeCard = (cardId) => {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.token,
    }).then(this._checkResponse);
  };

  deleteLikeCard = (cardId) => {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.token,
    }).then(this._checkResponse);
  };

  deleteCard = (cardId) => {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.token,
    }).then(this._checkResponse);
  };
}

const api = new Api("https://around-api.es.tripleten-services.com/v1", {
  authorization: "84f2dc5e-6e8b-45de-9c0c-c6ce97a9b666",
  "Content-Type": "application/json",
});

export default api;
