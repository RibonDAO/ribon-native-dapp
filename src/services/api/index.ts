import Axios, { AxiosRequestConfig } from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CURRENT_USER_KEY } from "../../contexts/currentUserContext";

const RIBON_API = "http://10.0.2.2:3001"; //"http://ribon-core-api-dev.us-east-1.elasticbeanstalk.com/";

export const baseURL = process.env.REACT_APP_RIBON_API || RIBON_API;
export const API_SCOPE = "/api/v1";

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

api.interceptors.request.use((request) =>
  request?.data
    ? { ...request, data: snakeCaseKeys(request?.data, { deep: true }) }
    : request,
);

api.interceptors.response.use(
  (response) => ({
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  }),
  (error) => Promise.reject(error),
);

api.interceptors.request.use(async (config) => {
  const lang = "en";
  const user = await AsyncStorage.getItem(CURRENT_USER_KEY);
  const email = JSON.parse(user || "{}")?.email;
  const authHeaders = { Language: lang, Email: email };
  // eslint-disable-next-line no-param-reassign
  config.headers = { ...authHeaders, ...config.headers };

  return config;
});

export function apiGet(url: string, config?: AxiosRequestConfig) {
  if (config) return api.get(`${API_SCOPE}/${url}`, config);

  return api.get(`${API_SCOPE}/${url}`);
}

export function apiPost(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.post(`${API_SCOPE}/${url}`, data, config);

  return api.post(`${API_SCOPE}/${url}`, data);
}

export function apiPut(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.put(`${API_SCOPE}/${url}`, data, config);

  return api.put(`${API_SCOPE}/${url}`, data);
}

export function apiDelete(url: string, config?: AxiosRequestConfig) {
  if (config) return api.delete(`${API_SCOPE}/${url}`, config);

  return api.delete(`${API_SCOPE}/${url}`);
}

export default api;
