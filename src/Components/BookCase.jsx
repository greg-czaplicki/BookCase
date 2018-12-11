import React, { Component } from "react";

class BookCase extends Component {
  state = {
    URL: "https://www.googleapis.com/books/v1/volumes?q=",
    apiKey: process.env.REACT_APP_API_KEY,
    searchTerm: "Ready Player One",
    books: []
  };

  componentDidMount() {
    fetch(
      `${this.state.URL}
       ${this.state.searchTerm}
       &key=${this.state.apiKey}`
    )
      .then(res => res.json())
      .then(data => this.setState({ books: data.items }));
  }

  render() {
    return (
      <div>
        <h1>Book Case</h1>
        {this.state.books.map(book => (
          <React.Fragment>
            <h3>{book.volumeInfo.title}</h3>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default BookCase;
