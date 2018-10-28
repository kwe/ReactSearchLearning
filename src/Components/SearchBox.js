import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onSearchBoxChange(event.target.value);
  }

  render() {
    const q = this.props.q;

    return (
      <div>
        <input type="search" value={q} onChange={this.handleChange} />
        <p>Searching for: {q} </p>
      </div>
    );
  }
}

export default SearchBox;
