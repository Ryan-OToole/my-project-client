import React, { Component } from 'react';


class SearchBar extends Component {

  state = {searchTerm: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }

  render() {
    return (
      <div className="search-bar">
      <h3>Search Recipes Here:</h3>
          <input
            size="50"
            value={this.state.searchTerm}
            onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
