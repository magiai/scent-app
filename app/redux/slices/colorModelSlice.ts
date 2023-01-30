import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ILchColorModelSupport {
    isLchSupported: boolean
} 

interface ILchColorModelBrowserSupportState {
    isLchSupported: ILchColorModelSupport
}

const initialLchColorModelBrowserSupportState = {
    isLchSupported: false
} 

export const lchModelBrowserSupportSlice = createSlice({
    name: 'LchColorModelBrowserSupport',
    initialState: initialLchColorModelBrowserSupportState,

    reducers: {
        setIsLchColorModelSupported: (state, action: PayloadAction<boolean>) => {
            state.isLchSupported = action.payload

        }
    }
})

export const {setIsLchColorModelSupported } = lchModelBrowserSupportSlice.actions
export const selectIsLchModelSupported = (state: RootState) => state.isLchSupported

export default lchModelBrowserSupportSlice.reducer
