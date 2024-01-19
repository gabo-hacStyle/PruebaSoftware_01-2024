import axios from "axios";

const baseUrl = 'http://localhost:8000'

export const fetchData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/data/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const postData = async () => {
    try {
        const response = await axios.post(`${baseUrl}/data/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



export const postUser = async (user) => {
    try {
        const response = await axios.post(`${baseUrl}/users/`, user);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const postLogin = async (credentials) => {
    try {
        const response = await axios.post(`${baseUrl}/login/`, credentials);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
