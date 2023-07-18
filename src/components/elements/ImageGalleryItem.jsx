import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    console.log(this.props);
    const { img } = this.props;
    return (
      <li className="gallery-item">
        <img src={img} alt="" />
      </li>
    );
  }
}
export default ImageGalleryItem;
