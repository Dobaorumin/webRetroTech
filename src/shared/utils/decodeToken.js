export default function decodeToken(token) {
  if (!token) {
    return null;
  }
  // PArtimos el token por el separador que es el . y pillamos el trozo del medio
  const userDataString = token.split(".")[1];
  // Reconstruimos el objeto que tiene los datos del usuario
  const userDataDecoded = JSON.parse(atob(userDataString));
  return userDataDecoded;
}
