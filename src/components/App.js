import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './services/fetchImages';
import Loader from './Loader/Loader';
import Button from './Button/Button';

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  handleSearchValueChange = text => {
    this.setState({
      searchValue: text,
    });
  };

  handleIncrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  removeItemsFromArray = () => {
    this.setState({
      images: [],
    });
  }; 

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchValue !== prevState.searchValue ||
      this.state.page !== prevState.page
    ) {
      this.setState({
        isLoading: true,
      });

      const result = await fetchImages(this.state.searchValue, this.state.page);

      this.setState(prevState => ({
        images: [...prevState.images, ...result],
      }));

      if (result) {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  render() {
    return (
      <>
        <Searchbar
          handleSearchValueChange={this.handleSearchValueChange}
          removeItemsFromArray={this.removeItemsFromArray}
        />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
        {!this.state.images ||
          (this.state.images.length > 10 && (
            <Button handleIncrementPage={this.handleIncrementPage} />
          ))}
      </>
    );
  }
}

export default App;
