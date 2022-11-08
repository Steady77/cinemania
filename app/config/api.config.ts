export const API_URL = `${process.env.API_URL}`;
export const API_KEY = `${process.env.API_KEY}`;
export const SERVER_URL = `${process.env.SERVER_URL}`;

export const getFiltersUrl = () => `v2.2/films/filters`;
export const getAuthUrl = (string: string) => `auth${string}`;
export const getMoviesUrl = (string: string) => `v2.2/films${string}`;
