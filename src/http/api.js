const apiUrl = "http://localhost:3001";
const requestMethods = {
  post: "POST",
  get: "GET",
  put: "PUT",
  delete: "DELETE",
};
const endpoints = {
  login: "/usuarios/login",
  signUp: "/usuarios",
  getUserInfo: "/usuarios/",
  getCategoria: "/comprar",
  getProductosCategoria: "/comprar/",
  getSingleProduct: "/comprar/",
};

async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem("token");
  const headers = new Headers();
  headers.append("Authorization", token);

  return await fetch(`${apiUrl}${path}`, { method, headers, body });
}

async function fetchApi(path, { body, method }) {
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

export async function login(email, contraseña) {
  const tokenData = await fetchApi(endpoints.login, {
    method: requestMethods.post,
    body: { email, contraseña },
  });
  const token = tokenData.data.token;
  localStorage.setItem("token", token);
  return token;
}

//REGISTRO
export async function signUpApi(data) {
  return await fetchApi(endpoints.signUp, {
    method: requestMethods.post,
    body: data,
  });
}

export async function getUserInfo(idUsuario) {
  const userData = await fetchApi(`${endpoints.getUserInfo}${idUsuario}`, {
    method: requestMethods.get,
  });
  return userData.data;
}

export async function getCategoria() {
  const categoria = await fetchApi(`${endpoints.getCategoria}`, {
    method: requestMethods.get,
  });
  return categoria;
}

export async function getProductosCategorias(idCategoria) {
  const productosCategoria = await fetchApi(
    `${endpoints.getProductosCategoria}${idCategoria}`,
    {
      method: requestMethods.get,
    }
  );
  return productosCategoria.data;
}

export async function getSingleProduct(idCategoria, idAnuncio) {
  const soloUnProducto = await fetchApi(
    `${endpoints.getSingleProduct}${idCategoria}/${idAnuncio}`,
    { method: requestMethods.get }
  );
  return soloUnProducto.data;
}
