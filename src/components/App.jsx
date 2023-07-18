import { Component } from 'react';
import ImageGallery from './elements/ImageGallery';
import SearchBar from './elements/SearchBar';
import axios from 'axios';

const API_URL =
  'https://pixabay.com/api/?key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12';

class App extends Component {
  state = {
    searchRes: [],
  };

  handleChangeRes = array => {
    this.setState({ searchRes: array });
    console.log('array', array);
  };

  render() {
    return (
      <div>
        <SearchBar searchRes={this.handleChangeRes}></SearchBar>
        <ImageGallery result={this.state.searchRes}></ImageGallery>
      </div>
    );
  }
}
export default App;
