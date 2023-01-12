import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../app/store'

interface CompositionScents {
    note: string;
    id: string;
    label: string;
    proportion: string;
}

interface CompositionScentsState {
    chosenScents: CompositionScents[]
}

const initialCompositionScentState: CompositionScentsState = {
    chosenScents: [],
}

export const chosenScentsSlice = createSlice({
    name: 'CompositionScents',
    initialState: initialCompositionScentState,

    reducers: {
        addChosenScent: (state, action) => {
            const scent = action.payload
            state.chosenScents.push({ id: scent[0], note: scent[1], label: scent[2], proportion: scent[3] })
        },

        removeScent: (state, action) => {
            const scentIndex = state.chosenScents.findIndex((scent) => scent.id === action.payload);
            state.chosenScents.splice(scentIndex, 1);
        },
    }
})

export const { addChosenScent, removeScent } = chosenScentsSlice.actions
export const selectChosenScents = (state: RootState) => state.chosenScents

export default chosenScentsSlice.reducer