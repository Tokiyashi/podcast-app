'use client';
import { createSlice } from '@reduxjs/toolkit';
import { Room } from '@/common/types/room';
import { DEFAULT_ROOM } from '@/common/constants/defaultRoom';

export type RoomState = {
  room: Room;
};

const initialState: RoomState = {
  room: DEFAULT_ROOM,
};

export const roomSlice = createSlice({
  name: 'trackList',
  initialState,
  reducers: {
    // setQueue: (state, action) => {
    //   state.queue = action.payload
    // },
    // addNewTrack: (state, action) => {
    //   state.queue = [...state.queue, action.payload]
    // },
    // finishCurrentTrack: (state) => {
    //   state.queue.shift()
    // },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    startRoom: state => {
      state.room.trackQueue = state.room.allTracks.slice(1);
    },
    // setCurrentTrack: (state, action) => {
    //   state.currentTrack = action.payload
    // },
    finishCurrentTrack: state => {
      state.room.trackQueue.shift();
    },
  },
});

export const { setRoom, startRoom, finishCurrentTrack } = roomSlice.actions;
export default roomSlice.reducer;
