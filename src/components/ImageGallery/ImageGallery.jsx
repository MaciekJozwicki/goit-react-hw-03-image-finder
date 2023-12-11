import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
import styles from "./ImageGallery.module.css";

export class ImageGallery extends Component {
  state = {
    imageObject: {},
    isModalOpen: false,
  };

  handleModalImage = image => {
    const imageObject = {
      url: image.largeImageURL,
      alt: image.tags,
    };

    this.setState({
      imageObject: imageObject,
    });
  };

  handleIsModalOpenChange = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  closeModal = e => {
    if (e.key !== "Escape") {
      this.setState({
        isModalOpen: false,
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state.imageObject);
  }

  render() {
    return (
      <>
        <ul className={styles.gallery}>
          {this.props.images?.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                image={image}
                handleModalImage={this.handleModalImage}
                handleIsModalOpenChange={this.handleIsModalOpenChange}
              />
            );
          })}
        </ul>
        {this.state.isModalOpen && (
          <Modal
            handleIsModalOpenChange={this.handleIsModalOpenChange}
            imageObject={this.state.imageObject}
            isModalOpen={this.state.isModalOpen}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
