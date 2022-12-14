export const BASE_URL = "https://api.molchanova.students.nomoredomains.icu";

function checkResponce(res) {
  if (res.ok) {
    return res.json();
  } else {
    return `Ошибка: ${res.status}`;
  }
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      return checkResponce(response);
    })
    .then((res) => {
      return res;
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      return checkResponce(response);
    })
    .then((res) => {
      return res;
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return checkResponce(response);
    })
    .then((data) => data);
};
