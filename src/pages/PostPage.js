import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import moment from "moment";

import { GetPostsData } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPostsData(id));
  }, [dispatch, id]);

  console.log("whats this?", selectPostAndComments);
  const post = useSelector(selectPostAndComments);
  // console.log("what data am I working with?", post);

  return (
    <div>
      {!post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{post.post.title}</h1>
          <p className="meta">
            By {post.post.developer.name}
            &bull; {moment(post.post.createdAt).format(
              "DD-MM-YYYY"
            )} &bull;{" "}
            <span className="tags">
              {post.post.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span className="Tag">{tag.tag}</span>{" "}
                  </React.Fragment>
                );
              })}
            </span>
          </p>

          <ReactMarkdown source={post.post.content} />
          <h2>Comments</h2>
          {post.comments.rows.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            post.comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className="meta">
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )}
          <p>TODO</p>
        </>
      )}
    </div>
  );
}
