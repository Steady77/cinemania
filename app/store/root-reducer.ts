import { reducer as toastrReducer } from 'react-redux-toastr';

import authSlice from './auth/auth.slice';
import filtersSlice from './filters/filters.slice';

export const reducers = {
	authSlice,
	filtersSlice,
	toastr: toastrReducer,
};
