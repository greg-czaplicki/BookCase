import React, { Component } from "react";

class Search extends Component {
  state = {
    book: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.book);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="searchBook"
            id="searchBook"
            value={this.state.book}
            onChange={e => this.setState({ book: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default Search;
