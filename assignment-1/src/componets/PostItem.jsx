import React from 'react'

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
