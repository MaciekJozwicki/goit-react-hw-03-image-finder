import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
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

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

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
            closeModal={this.closeModal}
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
