import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../feactures/user/userSlice'
import movieReducer from '../feactures/movie/movieSlice'

export default configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
