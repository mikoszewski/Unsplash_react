import React from "react";
import Gallery from "./Gallery";
import styles from "./ResultsPage.module.css";
import SearchBar from "./SearchBar";

const ResultsPage = (props) => {
  return (
    <div className={styles.results}>
      Another search
      <SearchBar onSubmit={props.onSubmit} onTextChange={props.onTextChange} />
      <button className={styles.button} onClick={props.onCloseResults}>
        Back to first page
      </button>
      <Gallery searchText={props.text} fullList={props.listOfPictures} />
    </div>
  );
};

export default ResultsPage;
