import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.in/api/products?limit=150');
        return response.data;
    } catch (error) {
        throw error;
    }
};