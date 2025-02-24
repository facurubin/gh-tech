export const BASE_URL_GITHUB = "https://api.github.com";
export const URL_GITHUB = "https://github.com/";

export const ROUTES = {
  HOME: () => "/",
  SEARCH_BY_USERNAME: (username: string) => `/?q=${username}`,
  PROFILE: () => "/profile",
};
