import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

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
            const newScent = action.payload
            const checkIfAlreadyAdded = state.chosenScents.findIndex((scent) => scent.id === newScent[0])
            if (checkIfAlreadyAdded !== -1) return

            state.chosenScents.push({ 
                                    id: newScent[0], 
                                    note: newScent[1], 
                                    label: newScent[2], 
                                    proportion: newScent[3] 
                                })
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