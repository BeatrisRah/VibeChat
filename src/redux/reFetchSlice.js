import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shouldRefetchRooms: false
};

const chatroomRefetchSlice = createSlice({
  name: 'chatroomRefetch',
  initialState,
  reducers: {
    triggerRefetch: (state) => {
      state.shouldRefetchRooms = true;
    },
    resetRefetch: (state) => {
      state.shouldRefetchRooms = false;
    }
  }
});

export const { triggerRefetch, resetRefetch } = chatroomRefetchSlice.actions;
export default chatroomRefetchSlice;