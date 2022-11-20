export interface IStaff {
	staffId: number;
	nameRu: string;
	nameEn: string;
	description: string;
	posterUrl: string;
	professionText: string;
	professionKey: string;
}

export interface IPerson {
	personId: number;
	webUrl: string;
	nameRu: string;
	nameEn: string;
	sex: string;
	posterUrl: string;
	growth: string;
	birthday: string;
	death: string;
	age: number;
	birthplace: string;
	deathplace: string;
	hasAwards: number;
	profession: string;
	facts: string[];
	spouses: ISpouses[];
	films: IPersonFilm[];
}

export interface ISpouses {
	personId: number;
	name: string;
	divorced: boolean;
	divorcedReason: string;
	sex: string;
	children: number;
	webUrl: string;
	relation: string;
}

export interface IPersonFilm {
	filmId: number;
	nameRu: string;
	nameEn: string;
	rating: string;
	general: boolean;
	description: string;
	professionKey: string;
}
