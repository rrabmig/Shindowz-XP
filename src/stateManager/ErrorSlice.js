import { createSlice } from "@reduxjs/toolkit";

const initialState = {show: false, message: ''}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        showNewError: (state, action) => {
            const errSound = new Audio('sounds/erro.mp3')
            errSound.play()
            state.show = true
            state.message = action.payload
        },
        hideError: (state, action) => {
            state.show = false
            state.message = ''
        }
    }
})

export const {showNewError, hideError} = errorSlice.actions

export default errorSlice.reducer