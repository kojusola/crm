import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/app/appSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
