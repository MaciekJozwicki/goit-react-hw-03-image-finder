import axios from 'axios';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    onePhoto: [],
  };

  handleOnePhoto = async id => {
    console.log('test');
    const images = await axios
      .get(
        `https://pixabay.com/api/?key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&id=${id}`
      )
      .then(res => {
        this.setState({ onePhoto: (this.state.onePhoto = [res.data.hits]) });
      });
    this.props.onePhoto(this.state.onePhoto);
    // this.props.abc();
  };

  render() {
    const { img, id } = this.props;
    return (
      <li className="imageGalleryItem">
        <img
          className="imageGalleryItem-image"
          onClick={() => this.handleOnePhoto(id)}
          src={img}
          alt=""
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
