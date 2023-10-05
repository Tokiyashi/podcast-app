import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '@/store/slices/playerSlice';
import trackListReducer from '@/store/slices/trackListSlice';
import roomReducer from '@/store/slices/roomSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    trackList: trackListReducer,
    room: roomReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
