import React from "react";

const Book = props => {
  const renderThumbnails = () => {
    if (props.volumeInfo.imageLinks) {
      return (
        <img src={props.volumeInfo.imageLinks.thumbnail} alt="thumbnail" />
      );
    } else {
      return <p>Image Not Found</p>;
    }
  };
  return (
    <div>
      <h1>{props.volumeInfo.title}</h1>
      {renderThumbnails()}
    </div>
  );
};

export default Book;
