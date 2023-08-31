import axios from "axios";  
const urlApi = import.meta.env.VITE_URL_API;


export const AxiosGiphy = axios.create({
    baseURL: urlApi,
    timeout:5000,
    headers:{
        // "Content-Type":"application/json",
        // "TOKEN":"13s13d5a4s5a35sdas5da9sda9s8da:"
    }

})


















