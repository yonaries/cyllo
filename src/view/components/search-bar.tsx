import React from "react";

type Props = {};

const SearchBar = ({}: Props) => {
  return (
    <div className="search-bar">
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Find by collections, doc, languages...."
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
