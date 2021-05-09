import React from "react";
import styles from "./UserInput.module.css";
import SearchBar from "./SearchBar";

const UserInput = (props) => {
  return (
    <div className={styles.box}>
      <h1>Unsplash</h1>
      <p>
        The internet's source of freely-usable images. Powered by creators
        everywhere.
      </p>
      <SearchBar onSubmit={props.onSubmit} onTextChange={props.onTextChange} />
      <p>Trending: flower, wallpapers, background, happy, love</p>
    </div>
  );
};

export default UserInput;
