import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from './ImageGalleryItem';

const API_KEY =
  'https://pixabay.com/api/?q=dog&page=1&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12';

class ImageGallery extends Component {
  state = {
    images: [],
    data: [],
  };

  getData = async () => {
    const images = await axios.get(API_KEY).then(res => {
      this.setState({ images: (this.state.images = [res.data.hits]) });
    });
  };

  async componentDidMount() {
    await this.getData();
    this.setState({ data: (this.state.data = this.state.images[0]) });
  }
  componentDidUpdate() {
    console.log('props', this.props.result);
    if (this.props.result) {
      console.log('test', this.props.result);
    }
  }

  render() {
    return (
      <ul className="gallery">
        {this.props.result.length > 0
          ? this.props.result.map(image => {
              return <ImageGalleryItem img={image.webformatURL} />;
            })
          : this.state.data.map(image => {
              return <ImageGalleryItem img={image.webformatURL} />;
            })}
      </ul>
    );
  }
}
export default ImageGallery;
