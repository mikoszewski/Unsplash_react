import React from "react";
import styles from "./ImageModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.handleCloseModal} />;
};

const ImageModal = (props) => {
  return (
    <div className={`${styles.modal} ${styles.card}`}>
      <header className={styles.header}>
        <h2>Author: {props.author}</h2>
        <p>Created at: {props.date}</p>
      </header>
      <div className={styles.content}>
        <img className={styles.img} src={props.urlSmall} alt={props.id} />
      </div>
      <footer className={styles.actions}>
        <button onClick={props.handleCloseModal}>Okay</button>
      </footer>
    </div>
  );
};

const ActiveModal = (props) => {
  return (
    <div>
      <Backdrop handleCloseModal={props.closeModal} />
      <ImageModal
        urlSmall={props.pictureInfo.urlSmall}
        handleCloseModal={props.closeModal}
        author={props.pictureInfo.author}
        date={props.pictureInfo.date}
        alt={props.pictureInfo.id}
      />
    </div>
  );
};

export default ActiveModal;
