class Api {
  constructor(url, token) {
    this.url = url;
    this.token = token;
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.token,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.token,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  saveCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  editUser(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}

const api = new Api(
  "https://around.nomoreparties.co/v1/web-es-cohort-17",
  "d453e3ac-8a06-4028-85b5-cd9f1421891b"
);

export default api;
