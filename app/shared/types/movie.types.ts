export interface IFiltersResp {
	genres: IGenre[];
	countries: ICountry[];
}

export interface IGenre {
	id: number;
	genre: string;
}

export interface ICountry {
	id: number;
	country: string;
}

export interface ISimilarMovie {
	filmId: number;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	posterUrl: string;
	posterUrlPreview: string;
	relationType: string;
}

export interface ISimilarsResp {
	total: number;
	items: ISimilarMovie[];
}

export interface IMovie {
	kinopoiskId: number;
	imdbId: string;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	posterUrl: string;
	posterUrlPreview: string;
	coverUrl: string;
	logoUrl: string;
	reviewsCount: number;
	ratingGoodReview: number;
	ratingGoodReviewVoteCount: number;
	ratingKinopoisk: number;
	ratingKinopoiskVoteCount: number;
	ratingImdb: number;
	ratingImdbVoteCount: number;
	ratingFilmCritics: number;
	ratingFilmCriticsVoteCount: number;
	ratingAwait: number;
	ratingAwaitCount: number;
	ratingRfCritics: number;
	ratingRfCriticsVoteCount: number;
	webUrl: string;
	year: number;
	filmLength: number;
	slogan: string;
	description: string;
	shortDescription: string;
	editorAnnotation: string;
	isTicketsAvailable: boolean;
	productionStatus: string;
	type: string;
	ratingMpaa: string;
	ratingAgeLimits: string;
	hasImax: boolean;
	has3D: boolean;
	lastSync: Date;
	countries: ICountry[];
	genres: IGenre[];
	startYear: number;
	endYear: number;
	serial: boolean;
	shortFilm: boolean;
	completed: boolean;
}

export interface ITopResponse {
	pagesCount: number;
	films: ITopMovie[];
}

export interface IPremieresMovies {
	total: number;
	items: IPremieresMovie[];
}

export interface IPremieresMovie {
	kinopoiskId: number;
	nameRu: string;
	nameEn: string;
	year: number;
	posterUrl: string;
	posterUrlPreview: string;
	countries: ICountry[];
	genres: IGenre[];
	duration: number;
	premiereRu: string;
}

export interface ITopMovie {
	filmId: number;
	nameRu: string;
	nameEn: string;
	year: string;
	filmLength: string;
	countries: ICountry[];
	genres: IGenre[];
	rating: string;
	ratingVoteCount: number;
	posterUrl: string;
	posterUrlPreview: string;
	ratingChange: string;
}

export interface IFilmByFilters {
	kinopoiskId: number;
	imdbId: number;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	countries: ICountry[];
	genres: IGenre[];
	ratingKinopoisk: number;
	ratingImdb: number;
	year: number;
	type: string;
	posterUrl: string;
	posterUrlPreview: string;
}

export interface IFilmsByFiltersResp {
	total: number;
	totalPages: number;
	items: IFilmByFilters[];
}

export interface IReleaseMovie {
	filmId: number;
	nameRu: string;
	nameEn: string;
	year: number;
	posterUrl: string;
	posterUrlPreview: string;
	countries: ICountry[];
	genres: IGenre[];
	rating: number;
	ratingVoteCount: number;
	expectationsRating: number;
	expectationsRatingVoteCount: number;
	duration: number;
	releaseDate: string;
}

export interface IReleasesResponse {
	page: number;
	total: number;
	releases: IReleaseMovie[];
}
