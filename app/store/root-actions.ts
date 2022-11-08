import * as authActions from './auth/auth.actions';
import * as filtersActions from './filters/filters.actions';

export const allActions = {
	...authActions,
	...filtersActions,
};
