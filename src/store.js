import { configureStore } from "@reduxjs/toolkit";
import webinarReducer from "./reducer/webinarReducer";

export const store = configureStore({
  reducer: {
    webinar: webinarReducer,
  },
});
