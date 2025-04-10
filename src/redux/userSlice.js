import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{
        username:'',
        email:'',
        id:'',
        token:null},
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
            
        },
        setChatrooms(state, action){
            const {joinedChatrooms, ownedChatrooms} = action.payload;
            state.joinedChatrooms = joinedChatrooms;
            state.ownedChatrooms = ownedChatrooms
        },
        resetUser: (state) => {
            state.data = initialState.data;
            state.joinedChatrooms = initialState.joinedChatrooms;
            state.ownedChatrooms = initialState.ownedChatrooms;
        }
    }
})

export const {setUser, resetUser, setChatrooms} = userSlice.actions;
export default userSlice.reducer;