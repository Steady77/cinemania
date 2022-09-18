import { reducer as toastrReducer } from 'react-redux-toastr';

import authSlice from './auth/auth.slice';

export const reducers = {
  authSlice,
  toastr: toastrReducer,
};
