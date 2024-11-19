import axios from "axios";

const api = axios.create({
    baseURL: 'https://673415f9a042ab85d118d6fa.mockapi.io/:Products'
});

export default api; 