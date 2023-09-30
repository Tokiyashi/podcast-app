import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '@/store/slices/playerSlice'
import trackListReducer from '@/store/slices/trackListSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    trackList: trackListReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
