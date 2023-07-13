const { Component } = require('react');

class SearchBar extends Component {
  state = {
    phrase: '',
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ phrase: value });
  };

  search = e => {
    e.preventDefault();
    this.props.phrase = this.state.phrase;
    this.props.onSearch();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button onClick={this.search} type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
