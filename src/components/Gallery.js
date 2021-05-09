import React, { useState } from "react";
import styles from "./Gallery.module.css";
import ActiveModal from "./ImageModal";

const Gallery = (props) => {
  const [activeModal, setActiveModal] = useState(false);
  const [pictureInfo, setPictureInfo] = useState({});

  const onModalHandle = (event) => {
    event.preventDefault();
    setActiveModal(true);
    setPictureInfo({
      urlSmall: event.target.src,
      author: event.target.dataset.author,
      date: new Date(event.target.dataset.date).toLocaleDateString(),
      id: event.target.alt,
    });
  };

  const onCloseModal = () => {
    setActiveModal(false);
  };

  return (
    <div>
      <ul className={styles.gallery}>
        {props.fullList.map((element) => {
          return (
            <img
              src={element.urls.small}
              data-author={element.user.name}
              alt={props.searchText}
              key={element.id}
              onClick={onModalHandle}
              data-date={element.created_at}
            />
          );
        })}
      </ul>
      {activeModal && (
        <ActiveModal closeModal={onCloseModal} pictureInfo={pictureInfo} />
      )}
    </div>
  );
};

export default Gallery;
