import { createSlice } from "@reduxjs/toolkit";
import { showNewError } from "./ErrorSlice";
import errorReducer from './ErrorSlice'

const initialState = {apps: [], focused: '', menu: false, volume: false}

export const LaunchedAppsSlice = createSlice({
    name: 'apps',
    initialState,
    reducers: {
        launchApp(state, action) {
            if (state.apps.includes(action.payload.app)) {
                // error
                // do nothing
            } else {
                state.apps.push(action.payload.app)
                state.focused = action.payload.app
                state.menu = false
            }
        },
        closeApp(state, action) {
            state.apps = state.apps.filter(x => x !== action.payload.app)
        },
        focusApp(state, action) {
            state.focused = action.payload.app
            state.menu = false
        },
        showMenu (state, action) {
            state.menu = true
        },
        hideMenu (state, action) {
            state.menu = false
            state.volume = false
        },
        showVolume (s, a) {
            s.volume = !s.volume
        }
    }
})

export const {launchApp, closeApp, focusApp, showMenu, hideMenu, showVolume} = LaunchedAppsSlice.actions

export default LaunchedAppsSlice.reducer