const apiUrl = "http://localhost:3001";
const requestMethods = { post: "POST", get: "GET" };
const endpoints = {
  login: "/users/login",
  signUp: "/users",
  getUserInfo: "/users/",
  entries: "/entries",
};

/**
 * Este metodo es generico y me va a servir para hacer peticiones en las que no subo ficheros
 */
async function genericRequest(path, { body, method }) {
  const token = localStorage.getItem("token");
  const headers = new Headers({ "Content-Type": "application/json" });
  if (token) {
    headers.append("Authorization", token);
  }
  const request = await fetch(`${apiUrl}${path}`, {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
  });
  const requestData = await request.json();
  if (requestData.status === "error") {
    throw requestData.message;
  }
  return requestData;
}

/**
 * Con esta función hago peticiones de login
 */
export async function login(email, password) {
  const tokenData = await genericRequest(endpoints.login, {
    method: requestMethods.post,
    body: { email, password },
  });
  const token = tokenData.data.token;
  localStorage.setItem("token", token);
  return token;
}
