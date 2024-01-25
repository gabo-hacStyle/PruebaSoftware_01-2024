import axios from "axios";


//archivo para hacer las peticiones a la api con axios

const baseUrl = 'http://localhost:8000'


//Para traer los datos de la tabla 
export const fetchData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/data/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//Para crear nuevo dato en la tabla
export const postData = async () => {
    try {
        const response = await axios.post(`${baseUrl}/data/`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


//Para registrar user
export const postUser = async (user) => {
    try {
        const response = await axios.post(`${baseUrl}/users/`, user);
        return response.data;
    } catch (error) {
        
        throw error;
    }
}

//Para hacer login
export const postLogin = async (credentials) => {
    try {
        const response = await axios.post(`${baseUrl}/login/`, credentials);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
