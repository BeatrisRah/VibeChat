import { createSlice } from "@reduxjs/toolkit";
import storage from "../utils/storage";

const initialState = {
    data:storage.getAll(),
    ownedChatrooms: [],
    joinedChatrooms: []
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const userData = action.payload;
            state.data = userData;
            storage.set(userData)
        },
        setChatrooms(state, action){
            const {joinedChatrooms, ownedChatrooms} = action.payload;
            state.joinedChatrooms = joinedChatrooms;
            state.ownedChatrooms = ownedChatrooms
        },
        resetUser: (state) => {
            state.data = null;
            state.joinedChatrooms = [];
            state.ownedChatrooms = [];
            localStorage.clear()
        }
    }
})

export const {setUser, resetUser, setChatrooms} = userSlice.actions;
export default userSlice.reducer;