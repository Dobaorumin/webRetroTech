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
  uploadProduct: "/subir",
  listMyProducts: "/mis-anuncios/",
  editUserInfo: "/usuarios/",
  listarSolicitudes: "/mis-solicitudes/",
  aceptarReserva: "/mis-anuncios/",
  borrarReserva: "/mis-anuncios/",
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

export async function uploadProduct(data) {
  const body = new FormData();
  body.append("titulo", data.titulo);
  body.append("descripcion", data.descripcion);
  body.append("precio", data.precio);
  body.append("provincia", data.provincia);
  body.append("localidad", data.localidad);
  body.append("images", data.images);
  body.append("idCategoria", data.idCategoria);
  return await fetchFormData(endpoints.uploadProduct, {
    method: requestMethods.post,
    body,
  });
}

export async function listMyProducts(idUsuario) {
  const product = await fetchApi(`${endpoints.listMyProducts}${idUsuario}`, {
    method: requestMethods.get,
  });
  return product.data;
}

export async function editUserInfo(
  id,
  nombre,
  apellidos,
  localidad,
  pais,
  provincia,
  email,
  ciudad
) {
  const userData = await fetchApi(`${endpoints.editUserInfo}${id}`, {
    method: requestMethods.put,
    body: {
      nombre,
      apellidos,
      localidad,
      pais,
      provincia,
      email,
      ciudad,
    },
  });
  return userData.data;
}
export async function reserveProduct(idCategoria, idAnuncio, mensajeCompra) {
  const response = await fetchApi(
    `${endpoints.getProductosCategoria}${idCategoria}/${idAnuncio}/proponer-compra`,
    {
      method: requestMethods.post,
      body: mensajeCompra,
    }
  );
  return console.log(response.data);
}

export async function listarSolicitudes(idUsuario) {
  const solicitudes = fetchApi(`${endpoints.listarSolicitudes}${idUsuario}`, {
    method: requestMethods.get,
  });
  return solicitudes;
}

export async function aceptarReserva(idAnuncio, idCompra, data) {
  const response = await fetchApi(
    `${endpoints.aceptarReserva}${idAnuncio}/solicitudes/${idCompra}`,
    {
      method: requestMethods.put,
      body: { lugarEntrega: data.lugarEntrega, horaEntrega: data.horaEntrega },
    }
  );
  return console.log(response);
}

export async function deleteReserve(idCompra) {
  const responseDelete = await fetchApi(
    `${endpoints.borrarReserva}${idCompra}/solicitudes`,
    {
      method: requestMethods.delete,
    }
  );
  return responseDelete;
}

export async function productoVendido(idAnuncio, idCompra) {
  const responseVendido = await fetchApi(
    `${endpoints.borrarReserva}${idAnuncio}/${idCompra}/vendido`,
    {
      method: requestMethods.put,
    }
  );
  return responseVendido;
}
