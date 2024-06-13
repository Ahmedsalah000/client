import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this URL is correct
  timeout: 10000, // Set a timeout value
});

export default apiClient;
