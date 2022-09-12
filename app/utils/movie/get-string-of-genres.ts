export const getStringOfGenres = (
  index: number,
  length: number,
  name: string,
) => (index + 1 === length ? name : name + ', ');

interface IArrayItem {
  genre: string;
}

export const getGenresList = (array: IArrayItem[]) =>
  array.map((i) => i.genre).join(', ');
