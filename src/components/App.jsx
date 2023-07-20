import { Component } from 'react';
import ImageGallery from './elements/ImageGallery';
import SearchBar from './elements/SearchBar';
import axios from 'axios';
import Button from './elements/Button';

class App extends Component {
  state = {
    searchRes: [],
    phrase: '',
    newImages: [],
    photoModal: [],
  };

  handleChangeRes = (array, phrase) => {
    this.setState({
      searchRes: array,
      phrase: phrase,
    });
    console.log('array', array, 'phrase', phrase);
  };
  handleLoadMore = array => {
    this.setState({ newImages: (this.state.newImages = array) });
    console.log(this.state.newImages);
  };
  handleModal = photo => {
    this.setState({ photoModal: (this.state.photoModal = photo) });
  };
  render() {
    return (
      <div className="App">
        <SearchBar searchRes={this.handleChangeRes}></SearchBar>
        <ImageGallery
          result={this.state.searchRes}
          newImages={this.state.newImages}
          photoModal={this.handleModal}
        ></ImageGallery>
        <Button phrase={this.state.phrase} load={this.handleLoadMore} />
      </div>
    );
  }
}
export default App;
