// возвращает только уникальные ключи
type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;

// ключи, которые есть в обоих объектах.
type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;

export type MergeTwoTypes<T, U> =
	// "не общие" (уникальные) ключи - опциональны
	Partial<GetObjDifferentKeys<T, U>> & {
		// общие ключи - обязательны
		[K in keyof GetObjSameKeys<T, U>]: T[K] | U[K];
	};

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
	countries: Country[];
	genres: Genre[];
	startYear: number;
	endYear: number;
	serial: boolean;
	shortFilm: boolean;
	completed: boolean;
}

export interface IPopularMovies {
	pagesCount: number;
	films: IPopularMovie[];
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
	countries: Country[];
	genres: Genre[];
	duration: number;
	premiereRu: string;
}

export interface IPopularMovie {
	filmId: number;
	nameRu: string;
	nameEn: string;
	year: string;
	filmLength: string;
	countries: Country[];
	genres: Genre[];
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
	countries: Country[];
	genres: Genre[];
	ratingKinopoisk: number;
	ratingImdb: number;
	year: number;
	type: string;
	posterUrl: string;
	posterUrlPreview: string;
}

export interface IFilmsByFilters {
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
	countries: Country[];
	genres: Genre[];
	rating: number;
	ratingVoteCount: number;
	expectationsRating: number;
	expectationsRatingVoteCount: number;
	duration: number;
	releaseDate: string;
}

export interface IReleasesResp {
	releases: IReleaseMovie[];
}
