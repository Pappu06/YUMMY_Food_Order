import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/payment",
});

export const createOrder = async () => {
    const response = await API.post("/create-order");
    return response.data;
};