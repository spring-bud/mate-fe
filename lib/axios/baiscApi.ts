import axios, { AxiosInstance } from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

const basicAPI: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default basicAPI;
