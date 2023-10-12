import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/playerSlice';
import trackListReducer from './slices/trackListSlice';
import roomReducer from './slices/roomSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    trackList: trackListReducer,
    room: roomReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
