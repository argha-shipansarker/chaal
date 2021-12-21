import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./UserData"

export default configureStore({
    reducer: {
        userData: userDataReducer,
    }
})