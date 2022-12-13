import AsyncStorage from "@react-native-async-storage/async-storage";
import { CURRENT_USER_KEY } from "../../contexts/currentUserContext";
import { apiGet, apiDelete, apiPut, apiPost, api } from "@ribon/shared";

const RIBON_API = "https://dapp-dev-api.ribon.io/";

export const baseURL = process.env.REACT_APP_RIBON_API || RIBON_API;

api.defaults.baseURL = baseURL;

api.interceptors.request.use(async (config) => {
  const lang = "pt-BR";
  const user = await AsyncStorage.getItem(CURRENT_USER_KEY);
  const email = JSON.parse(user || "{}")?.email;
  const authHeaders = { Language: lang, Email: email };
  // eslint-disable-next-line no-param-reassign
  config.headers = { ...authHeaders, ...config.headers };

  return config;
});

export { apiGet, apiDelete, apiPut, apiPost };
export default api;
