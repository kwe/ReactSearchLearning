import React, { Component } from "react";

import SearchBox from "./SearchBox";
import SearchResults from "./SeachResults";

class SearchFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { q: "" };
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
  }
  handleSearchBoxChange(q) {
    this.setState({ q });
  }
  render() {
    return (
      <div>
        <h2>Search Frame</h2>
        <SearchBox
          q={this.state.q}
          onSearchBoxChange={this.handleSearchBoxChange}
        />
        <SearchResults q={this.state.q} />
      </div>
    );
  }
}

export default SearchFrame;
