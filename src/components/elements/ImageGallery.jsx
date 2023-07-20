import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from './ImageGalleryItem';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY =
//   'https://pixabay.com/api/?q=dog&page=1&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12';

class ImageGallery extends Component {
  state = {
    images: [],
    data: [],
    isLoading: false,
    onePhoto: [],
  };

  // getData = async () => {
  //   const images = await axios.get(API_KEY).then(res => {
  //     this.setState({ images: (this.state.images = [res.data.hits]) });
  //   });
  // };

  // async componentDidMount() {
  //   await this.getData();
  //   this.setState({ data: (this.state.data = this.state.images[0]) });
  // }

  async componentDidMount() {
    const res = await axios.get(
      `?q=${this.props.searchQuery}&page=1&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({
      data: (this.state.data = res.data.hits),
    });
  }

  // componentDidUpdate() {
  //   console.log('props', this.props.result);
  //   if (this.props.result) {
  //     console.log('test', this.props.result);
  //   }
  // }

  handleOnePhoto = photo => {
    this.setState({ onePhoto: (this.state.onePhoto = photo) });
    console.log(this.state.onePhoto);
  };
  render() {
    return (
      <ul className="imageGallery">
        {this.props.result.map(image => {
          return (
            <ImageGalleryItem
              // abc={this.props.photoModal(this.state.onePhoto)}
              // onClick={this.props.photoModal(this.state.onePhoto)}
              img={image.webformatURL}
              id={image.id}
              onePhoto={this.handleOnePhoto}
            />
          );
        })}

        {/* {this.props.newImages.length > 0
          ? this.props.newImages.map(image => (
              <ImageGalleryItem
                // abc={this.props.photoModal(this.state.onePhoto)}
                // onClick={this.props.photoModal(this.state.onePhoto)}
                img={image.webformatURL}
                id={image.id}
                onePhoto={this.handleOnePhoto}
              />
            ))
          : null} */}
      </ul>
    );
  }
}
export default ImageGallery;
