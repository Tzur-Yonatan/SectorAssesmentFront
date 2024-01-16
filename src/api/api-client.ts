import axios, { AxiosResponse } from "axios";

export const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
});

export const handleRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>
) => {
  try {
    const response = await request();
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
