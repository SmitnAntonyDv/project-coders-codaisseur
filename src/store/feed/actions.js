// an action is a function to get store/update data in our store.
// returns an object that the store can work with
import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function storeDataInStore(APIdata) {
  return { type: "add_posts", payload: APIdata };
}
export function setLoadingIndicator(data) {
  return { type: "loading", payload: data };
}

export async function fetchNext5Posts(dispatch, getState) {
  //getState -> function to get the data from store (posts.post.length)
  //console.log("what is my getSTate?", getState().feed.posts.length);

  dispatch(setLoadingIndicator(true));
  const res = await axios.get(`${API_URL}/posts?offset=${
    getState().feed.posts.length
  }
  &limit=5`);
  const morePosts = res.data.rows;
  dispatch(storeDataInStore(morePosts));
}
