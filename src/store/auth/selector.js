export function authUser(state) {
  //console.log("WHAT IS IN MY STORE", state);
  return state ? state.auth.me : "LOG IN!";
}
