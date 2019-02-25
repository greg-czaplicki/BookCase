import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../actions/books";
import Book from "./Book";
import Search from "./Search";

class BookCase extends Component {
  state = {
    searchTerm: "hunger games"
  };

  componentDidMount() {
    this.props.fetchBooks(this.state.searchTerm);
  }

  onSearchSubmit = book => {
    this.setState({
      searchTerm: book
    });
  };

  renderBookList = () => {
    console.log(this.props);
    if (this.props.books.length === 0) {
      return <p>Loading...</p>;
    } else {
      return this.props.books.map(book => <Book {...book} key={book.id} />);
    }
  };

  render() {
    return (
      <div>
        <h1>Book Case</h1>
        <Search onSearchSubmit={this.onSearchSubmit} />
        {this.renderBookList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  { fetchBooks }
)(BookCase);
