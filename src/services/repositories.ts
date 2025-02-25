import { BASE_URL_GITHUB } from "@/constants";
import { Repository, RepositoryResponse } from "@/models/Repository";
import axios from "axios";

const httpProvider = axios.create({ baseURL: BASE_URL_GITHUB });

export const repositoriesService = {
  listByUsername: async (username: string): Promise<Repository[]> => {
    const { data } = await httpProvider.get<RepositoryResponse[]>(
      `users/${username}/repos`,
    );
    return data.map(({ name, html_url }) => ({ name, url: html_url }));
  },
};
