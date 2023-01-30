import searchEngineReducer from './slices/searchSlice'
import chosenScentsReducer from  './slices/scentSlice'
import isLchSupportedReducer from  './slices/colorModelSlice'
import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  
  export const store = configureStore({
    reducer: {
        searchEngine: searchEngineReducer,
        chosenScents: chosenScentsReducer,
        isLchSupported: isLchSupportedReducer,
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