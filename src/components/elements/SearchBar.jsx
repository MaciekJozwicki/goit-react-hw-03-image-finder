import { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  state = {
    phrase: '',
    search: [],
  };

  getData = async () => {
    const images = await axios
      .get(
        `
    https://pixabay.com/api/?q=${this.state.phrase}&page=1&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        this.props.searchRes(res.data.hits);
        this.setState({
          search: (this.state.search = [res.data.hits]),
        });
        localStorage.setItem('dataA', JSON.stringify(this.state.search));
      });
    console.log(this.state.search);
  };

  handleSearch = e => {
    const { phrase } = this.state;
    this.setState({ phrase: e.target.value });
    console.log(phrase);
  };

  search = e => {
    e.preventDefault();
    this.getData();
    console.log(this.state.search);
    if (this.state.search) {
      console.log(this.state.search);
      this.props.searchRes(this.state.search);
    }
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button onClick={this.search} type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearch}
            value={this.state.phrase}
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
