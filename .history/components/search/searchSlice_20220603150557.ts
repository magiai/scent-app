import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../app/store';

  export type CounterState = {
    value: string;
  };
  
  const initialState: CounterState = {
    value: 'owl',
  };