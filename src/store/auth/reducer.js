const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function authSlideReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "USER_LOGGED_IN":
      // console.log(
      //   "REDUCER.JS LOG -> What is my type:",
      //   type,
      //   "payload:",
      //   payload
      // );
      return {
        ...state,
        me: payload.profile.name,
        accessToken: payload.token,
      };
    case "auth/logout":
      return {
        ...state,
        me: null,
        accessToken: null,
      };

    default:
      return state;
  }
}
