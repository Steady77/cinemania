import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER } from '@/utils/consts';
import { getFromLS } from '@/utils/storage';

import { IAuthState, IUserCred } from './auth.interface';

const initialState: IAuthState = {
  isAuth: false,
  authData: getFromLS(USER),
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IUserCred>) {
      state.isAuth = true;
      state.authData = action.payload;
    },
    removeAuthData(state) {
      state.isAuth = false;
      state.authData = null;
    },
  },
});

export const { setAuthData, removeAuthData } = authSlice.actions;
export default authSlice.reducer;
