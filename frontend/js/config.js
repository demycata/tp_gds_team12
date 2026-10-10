// URL del backend desplegado en Render. Reemplazar por la URL real una vez creado el servicio
// (ej. "https://los-vigilantes-backend.onrender.com"). En local, al correr en localhost/127.0.0.1,
// se usan rutas relativas y no hace falta tocar nada.
const esLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const API_BASE_URL = esLocal ? '' : 'https://tp-gds-team12.onrender.com';
