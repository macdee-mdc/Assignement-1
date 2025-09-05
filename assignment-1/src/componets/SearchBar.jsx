import React from "react";

const SearchBar = ({ searchItem, setSearchTerm }) => {
  return (
    <div className="search-item">
      <input
        type="text"
        placeholder="Search a post..."
        value={searchItem}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
