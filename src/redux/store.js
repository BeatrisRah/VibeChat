import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import chatroomRefetchSlice from "./reFetchSlice";

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        reFetchChatrooms: chatroomRefetchSlice.reducer
    },
    devTools: true
})