import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY =
//   'https://pixabay.com/api/?q=dog&page=1&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12';

class ImageGallery extends Component {
  state = {
    images: [],
    data: [],
    isLoading: false,
    onePhoto: '',
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
      `https://pixabay.com/api/?q=dog&page=1&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12'`
    );
    console.log(res);
    this.setState({
      data: (this.state.data = res.data.hits),
    });
  }

  componentDidUpdate() {
    console.log(this.state.onePhoto);
  }

  handleOnePhoto = photo => {
    console.log(photo);
    this.setState({ onePhoto: photo });
    console.log(this.state.onePhoto);
  };

  render() {
    return (
      <>
        <ul className="imageGallery">
          {this.state.data.map(image => {
            return (
              <ImageGalleryItem
                img={image.webformatURL}
                id={image.id}
                alt={image.tags}
                largeItem={image.largeImageURL}
                onePhoto={this.handleOnePhoto}
              />
            );
          })}
        </ul>
        {this.state.onePhoto.length > 0 && (
          <Modal
            imageAddress={this.state.onePhoto}
            onClick={e => {
              // e.stopPropagation();
              this.setState({ onePhoto: '' });
            }}
          />
        )}
      </>
    );
  }
}
export default ImageGallery;
