import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  handleModalOpen = () => {
    this.props.handleModalImage(this.props.image);
    this.props.handleIsModalOpenChange();
  };
  render() {
    const { webformatURL, id, tags } = this.props.image;

    return (
      <li className={styles.item} key={id} onClick={this.handleModalOpen}>
        <img className={styles.photo} src={webformatURL} alt={tags} />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  handleModalImage: PropTypes.func,
  handleIsModalOpenChange: PropTypes.func,
};
export default ImageGalleryItem;
