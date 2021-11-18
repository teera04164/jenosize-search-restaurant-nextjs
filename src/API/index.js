import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5002' : process.env.NEXT_PUBLIC_BACKEND_URL;

export { baseUrl }

const api = {
    getSearch: async (params) => {
        const { data } = await axios.get(`${baseUrl}/api/restaurant/search`, { params });
        return data
    },
};

export default api;