import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './root-reducer';

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
