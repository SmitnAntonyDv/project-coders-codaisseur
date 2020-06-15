import axios from "axios";

//rein@rein.com abcd1234
//base URL
const API_URL = "https://codaisseur-coders-network.herokuapp.com";

export function userLoggedIn(token, profile) {
  // console.log("ACTIONS.JS LOG - What are my token", token, "profile", profile);
  return {
    type: "USER_LOGGED_IN",
    payload: { profile, token },
  };
}

// Login Thunk action
export function login(email, password) {
  // console.log("email", email, "pw", password);
  return async function thunk(dispatch, getState) {
    const res = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });

    const token = res.data.jwt;

    const responseGetUser = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const profile = responseGetUser.data;
    //console.log("alive? RESPONSE", responseGetUser.data);

    // console.log("what is local storage?", localStorage);
    localStorage.setItem("savingToken", token);
    dispatch(userLoggedIn(token, profile));
  };
}

// export function bootstrapLoginState() {
//   console.log("what is local storage?", localStorage);

export async function bootstrapLoginState(dispatch, getState) {
  console.log("is it true?", localStorage.savingToken === true);
  if (localStorage.savingToken) {
    const token = localStorage.savingToken;
    console.log("whats my token", token);

    const res = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const profile = res.data;
    console.log("what is my res?", res);
    dispatch(userLoggedIn(token, profile));
  }
}

// logout Thunk
export function logout(dispatch, getState) {
  dispatch({ type: "auth/logout" });
  localStorage.removeItem("savingToken");
  // localStorage.removeItem("token");
  console.log("WHAT IS MY STORAGE AFTER LOGOUT?", localStorage);
}
