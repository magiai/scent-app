import searchEngineSlice from './components/search/searchSlice';

import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  
  export const store = configureStore({
    reducer: {
        searchEngine: searchEngineSlice.reducer,
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;