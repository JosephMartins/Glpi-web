import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/glpi/apirest.php',
});

export default api;
