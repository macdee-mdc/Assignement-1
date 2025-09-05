import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  if (posts.length === 0) return <p>No posts available</p>;
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
