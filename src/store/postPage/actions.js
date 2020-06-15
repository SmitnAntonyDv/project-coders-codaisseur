import axios from "axios";

//base url
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
  return { type: "LOADINGPOST" };
}

export function postFullyFetched(post) {
  return { type: "FETCHING_POST_DATA", payload: post };
}

//action to request API data
export function GetPostsData(id) {
  return async function thunk(dispatch, getSate) {
    // console.log("WHAT POSTS IS FETCHED?", id);
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    console.log("GOT DATA?", postResponse.data);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
