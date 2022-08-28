export interface IGenres {
  genres: Genre[];
  countries: Country[];
}

type Genre = {
  id: number;
  genre: string;
};

type Country = {
  id: number;
  country: string;
};
