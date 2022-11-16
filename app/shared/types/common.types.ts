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
