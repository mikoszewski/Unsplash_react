import React from "react";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Search a word"
        onChange={props.onTextChange}
      ></input>
    </form>
  );
};

export default SearchBar;
