import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{
        username:'',
        email:'',
        id:'',
        token:''},
    ownedChatrooms: [],
    joinedChatrooms: []
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload.userData;
            state.joinedChatrooms = action.payload.joinedChatrooms;
            state.ownedChatrooms = action.payload.ownedChatrooms;
        },
        resetUser: (state) => {
            state
        }
    }
})