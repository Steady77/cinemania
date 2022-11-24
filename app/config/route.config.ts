export const getMovieRoute = (id: number | undefined) => `/movie/${id}`;
export const getStaffRoute = (id: number | undefined) => `/staff/${id}`;
export const getGenreRoute = (id: string) => `/genre/${id}`;
export const getCountryRoute = (id: string) => `/country/${id}`;
export const getAdminRoute = (url: string) => `/admin/${url}`;
