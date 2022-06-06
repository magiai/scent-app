import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../app/store';

  export type SearchEngineState = {
    value: string;
  };
  
  const initialState: SearchEngineState = {
    value: 'owl',
  };

  export const searchEngineSlice = createSlice({
    name: 'searchEngine',
    initialState,

    reducers: {

      incrementByAmount: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      },
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    incrementByAmount,
  } = searchEngineSlice.actions;
  
  // calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
  export const selectSearch = (state: RootState) => state.searchEngine.value;
  
  // exporting the reducer here, as we need to add this to the store
  export default searchEngineSlice.reducer;