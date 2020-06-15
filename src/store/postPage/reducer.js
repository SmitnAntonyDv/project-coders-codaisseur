const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "LOADINGPOST":
      return {
        loading: true,
        post: null,
        comments: [],
      };
    case "FETCHING_POST_DATA":
      console.log("WHAT IS MY TYPE:", type, "PAYLOAD?", payload);
      return {
        loading: false,
        post: payload.post,
        comments: payload.comments,
      };

    default:
      return state;
  }
}
