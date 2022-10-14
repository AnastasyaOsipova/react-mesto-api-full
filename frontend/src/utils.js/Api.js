class Api {
  constructor(config) {
    this._url = config.url;
  }

  _checkResponce(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards(token) {
    return fetch(`${this._url}cards/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).then(this._checkResponce);
  }

  addCard(data, token) {
    return fetch(`${this._url}cards/`, {
      method: "POST",
      headers: {
        //Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(this._checkResponce);
  }

  getUserInfoApi(token) {
    return fetch(`${this._url}users/me/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).then(this._checkResponce);
  }

  updateUserInfo(data, token) {
    return fetch(`${this._url}users/me/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(this._checkResponce);
  }

  changeLikeCardStatus(id, isLiked, token) {
    if (isLiked) {
      return api.deleteCardLike(id, token);
    } else {
      return api.setCardLike(id, token);
    }
  }

  setCardLike(id, token) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: "PUT",
      headers: {
       Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponce);
  }

  deleteCardLike(id, token) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponce);
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: {
       // Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponce);
  }

  updateAvatar(data, token) {
    return fetch(`${this._url}users/me/avatar/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(this._checkResponce);
  }
}

const api = new Api({
  url: "https://api.molchanova.students.nomoredomains.icu",
});

export default api;
