import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./config/configSlice";

export default configureStore({
    reducer: {
        counter: configSlice,
    },
});


