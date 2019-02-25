import uuid from "uuid";

import GoogleBooks from "../apis/GoogleBooks";

const apiKey = process.env.REACT_APP_API_KEY;

export const addBook = ({
  title = "",
  author = "",
  haveRead = false,
  description = "",
  startedAt = 0,
  finishedAt = 0
} = {}) => ({
  type: "ADD_BOOK",
  book: {
    id: uuid(),
    title,
    author,
    haveRead,
    description,
    startedAt,
    finishedAt
  }
});

export const fetchBooks = book => {
  return async dispatch => {
    const response = await GoogleBooks.get(`/${book}&key=${apiKey}`);

    dispatch({
      type: "FETCH_BOOKS",
      payload: response.data
    });
  };
};
