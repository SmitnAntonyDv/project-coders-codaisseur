export function selectFeedPosts(reduxStore) {
  return reduxStore.feed;
}
export function selectLoadingIndicator(state) {
  return state.feed.loading;
}
