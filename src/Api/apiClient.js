import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://server-coral-three.vercel.app', // Ensure this URL is correct
  timeout: 10000, // Set a timeout value
});

export default apiClient;
