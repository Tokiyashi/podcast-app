'use client';
import { Track } from '@/common/types/musicItem';
import { createSlice } from '@reduxjs/toolkit';

export type TrackListState = {
  queue: Track[];
};

const initialState: TrackListState = {
  queue: [],
};

export const trackListSlice = createSlice({
  name: 'trackList',
  initialState,
  reducers: {
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    addNewTrack: (state, action) => {
      state.queue = [...state.queue, action.payload];
    },
    finishCurrentTrack: state => {
      state.queue.shift();
    },
  },
});

export const { setQueue, addNewTrack, finishCurrentTrack } =
  trackListSlice.actions;
export default trackListSlice.reducer;
