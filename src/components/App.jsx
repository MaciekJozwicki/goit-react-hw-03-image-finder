import ImageGallery from './elements/ImageGallery';
import SearchBar from './elements/SearchBar';
import axios from 'axios';
const API_URL =
  'https://pixabay.com/api/?key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12';

const { Component } = require('react');

class App extends Component {
  state = {
    page: 1,
    phrase: '',
  };

  handleFetch = () => {
    const { phrase, page } = this.state;

    try {
      const response = axios.get(
        `${API_URL}&q=${encodeURIComponent(phrase)}&page=${page}`
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  handleSearch = e => {
    const { phrase } = this.state;
    this.setState({ phrase: e.target.value });
    console.log(phrase);
  };
  
  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch}
          phrase={this.state.phrase}
        ></SearchBar>
        <ImageGallery></ImageGallery>
      </div>
    );
  }
}
export default App;
