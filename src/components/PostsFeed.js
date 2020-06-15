import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
// import { storeDataInStore, setLoadingIndicator } from "../store/feed/actions";
import {
  selectFeedPosts,
  selectLoadingIndicator,
} from "../store/feed/selector";
import { fetchNext5Posts } from "../store/feed/actions";

export default function PostsFeed() {
  const posts = useSelector(selectFeedPosts);
  const loading = useSelector(selectLoadingIndicator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, []);

  //return functions
  const renderListofposts = () => {
    return (
      <ul>
        {posts.posts.map((posts) => {
          return (
            <Link to={`/posts/${posts.id}`}>
              <li key={posts.id}>{posts.title}</li>
            </Link>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {/* TODO: render the list of posts */}
      {renderListofposts()}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}

      {loading ? (
        "Loading..."
      ) : (
        <button onClick={(e) => dispatch(fetchNext5Posts)}>
          Load more posts
        </button>
      )}
    </div>
  );
}
