import { BASE_URL_GITHUB } from "@/constants";
import axios from "axios";

const httpProvider = axios.create({ baseURL: BASE_URL_GITHUB });

export const usersService = {
  list: () => {
    return httpProvider.get("users");
  },
  search: (term: string) => {
    return httpProvider.get(`search/users?q=${term}`);
  },
  getByUsername: async (username: string) => {
    const { data } = await httpProvider.get(`users/${username}`);
    return data;
  },
};
