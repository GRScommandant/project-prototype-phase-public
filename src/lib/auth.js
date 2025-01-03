import axios from "axios";
import conifg from "../config/index.js";

export async function register(data) {
    try {
        const response = await axios.post(conifg.apiURL.auth.register, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Success:', response.data);
        // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request data:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
        }
    }
}

export async function login(data) {
    try {
        const response = await axios.post(conifg.apiURL.auth.login, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Success:', response.data);
        // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request data:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
        }
    }
}
export async function emailver(data) {
    try {
        const response = await axios.post(conifg.apiURL.auth.emailver, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Success:', response.data);
        // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request data:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
        }
    }
}
export default { register , login ,emailver }
