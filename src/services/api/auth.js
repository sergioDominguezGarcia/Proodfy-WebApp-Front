import { removeToken, setToken } from "../storage/token";

const BASE_URL = "http://localhost:8080/auth";

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    body: JSON.stringify({ email, password }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const token = await response.json();

  if (token) {
    setToken(token);
  }
};

export const signup = async (data) => {
  console.log("Datos recibidos en signup:", data);
  const response = await fetch(`${BASE_URL}/signup`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 500) {
    const msg = await response.json();
    throw new Error(msg);
  }

  const token = await response.json();

  if (token) {
    setToken(token);
  }
};

export const logout = async () => {
  removeToken();
};
