import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/api'

export const getCharactareById = async (id) => {
    const response = await axios.get(`/character/${id}`);

    return response.data;
}

