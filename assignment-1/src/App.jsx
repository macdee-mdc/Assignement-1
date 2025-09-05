import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./componets/SearchBar";
import PostList from "./componets/PostList";
import Pagination from "./componets/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1); 
  const postsPerPage = 10;

 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.includes(searchTerm) 
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchTerm, posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <p className="loading">Loading posts...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="app-container">
      <h1>Fetched Posts</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PostList posts={currentPosts} />
      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
