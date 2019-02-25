const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return action.payload.items;
    default:
      return state;
  }
};

export default booksReducer;
