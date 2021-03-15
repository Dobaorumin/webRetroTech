const apiUrl = "http://localhost:3001";

/**
 * Este metodo es generico y me va a servir para hacer peticiones en las que no subo ficheros
 */
async function genericRequest(path, { body, method }) {
  const headers = new Headers({ "Content-Type": "application/json" });

  const response = await fetch(`${apiUrl}${path}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });

  return response;
}

/**
 * Con esta función hago peticiones de login
 */
export function login(loginData) {
  return genericRequest("/users/login", {
    method: "POST",
    body: loginData,
  });
}

/**
 * Con esta función hago peticiones de login
 */
export function register(registerData) {
  return genericRequest("/users", {
    method: "POST",
    body: registerData,
  });
}
