import { BASE_URL_GITHUB } from "@/constants";
import axios from "axios";

const httpProvider = axios.create({ baseURL: BASE_URL_GITHUB });

export interface Repository {
  name: string;
  url: string;
}

export const repositoriesService = {
  listByUsername: async (username: string) => {
    const { data } = await httpProvider.get<Repository[]>(
      `users/${username}/repos`,
    );
    return data.map(({ name, url }) => ({ name, url }));
  },
};
