import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";
import authSlideReducer from "../store/auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  auth: authSlideReducer,
  // etc.
});

export default reducer;
