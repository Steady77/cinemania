import { reducer as toastrReducer } from 'react-redux-toastr';

import auth from './auth/auth.slice';

export const reducers = {
  auth,
  toastr: toastrReducer,
};
