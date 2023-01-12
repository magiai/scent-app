import searchEngineReducer from '../components/search/searchSlice';
import chosenScentsReducer from  '../components/scentFamily/scent/scentSlice'
import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  
  export const store = configureStore({
    reducer: {
        searchEngine: searchEngineReducer,
        chosenScents: chosenScentsReducer,
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