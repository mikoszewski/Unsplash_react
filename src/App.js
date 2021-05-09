import React, { useState } from "react";
import UserInput from "./components/UserInput";
import ResultsPage from "./components/ResultsPage";
import nodeFetch from "../node_modules/node-fetch";
import { createApi } from "../node_modules/unsplash-js";

function App() {
  const [resultsPage, setResultsPage] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [listOfImages, setListOfImages] = useState([]);

  const onTextSearch = (event) => {
    setTextInput(event.target.value);
  };

  const returnToFirstPage = () => {
    setResultsPage(false);
  };

  const searchText = (event) => {
    event.preventDefault();
    listOfPhotos2(textInput);
    setResultsPage(true);
  };

  const unsplash = createApi({
    accessKey: "5j4rDTmTLNT5zqvuu9AD2NKuWdfoJVQL02ZDwOmWRY8",
    fetch: nodeFetch,
  });

  const listOfPhotos2 = async (theme) => {
    try {
      //ściaga max 10 także zakładam ze nie bedzie nigdy na stronie więcej niz 10,
      const pictures = await unsplash.search.getPhotos({
        query: `${theme}`,
        page: 1,
        perPage: 10,
        // orientation: "portrait",
      });

      const listOfPics = pictures.response.results;

      if (!(listOfPics.length === 0)) {
        // listOfPics.forEach(function (elem, index) {
        //   wallpaper.insertAdjacentHTML("beforeend", manyPics(elem, index));
        // });
        // for (let i = 0; i < listOfPics.length; i++) {
        //   createEventListener(document.querySelector(`.data-${i}`), openModal);
        // }
        // setImageList(listOfPics);
        // console.log(listOfPics);
        setListOfImages(listOfPics);
      } else {
        alert("No pics found for given word. Please choose another one.");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      {resultsPage && listOfImages.length > 0 && (
        <ResultsPage
          text={textInput}
          tak="belka"
          listOfPictures={listOfImages}
          onSubmit={searchText}
          onTextChange={onTextSearch}
          onCloseResults={returnToFirstPage}
        />
      )}
      <UserInput onSubmit={searchText} onTextChange={onTextSearch} />
    </div>
  );
}

export default App;
