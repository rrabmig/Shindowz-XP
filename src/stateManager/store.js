import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './ErrorSlice'
import appsReducer from './LaunchedAppsSlice'


export const store = configureStore({
  reducer: {
    error: errorReducer,
    apps: appsReducer
  },
})