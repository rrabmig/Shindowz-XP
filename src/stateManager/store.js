import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './ErrorSlice'
import appsReducer from './LaunchedAppsSlice'
import settingsReducer from './SettingsSlice'


export const store = configureStore({
  reducer: {
    error: errorReducer,
    apps: appsReducer,
    settings: settingsReducer
  },
})