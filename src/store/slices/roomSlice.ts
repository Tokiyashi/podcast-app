'use client'
import { createSlice } from '@reduxjs/toolkit'
import { Room } from '@/common/types/room'
import { DEFAULT_ROOM } from '@/common/constants/defaultRoom'

export type RoomState = {
  room: Room
}

const initialState: RoomState = {
  room: DEFAULT_ROOM,
}

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
      state.room = action.payload
    },
    // setCurrentTrack: (state, action) => {
    //   state.currentTrack = action.payload
    // },
  },
})

export const { setRoom } = roomSlice.actions
export default roomSlice.reducer
