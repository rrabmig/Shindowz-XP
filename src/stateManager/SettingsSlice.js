import { createSlice } from "@reduxjs/toolkit";
import Volume from "../components/Lowbar/elements/Volume/Volume";

const initialState = {volume: 0.5}

const volumeSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setVolume: (state, action) => {
            state.volume = action.payload
            console.log(action.payload)
        }
    }
})

export const {setVolume} = volumeSlice.actions

export default volumeSlice.reducer