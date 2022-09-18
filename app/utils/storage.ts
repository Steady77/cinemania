export const getFromLS = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name);
		return ls ? JSON.parse(ls) : null;
	}

	return null;
};

export const saveToLS = <T>(name: string, data: T) => {
	localStorage.setItem(name, JSON.stringify(data));
};

export const removeFromLS = (name: string) => {
	localStorage.removeItem(name);
};
