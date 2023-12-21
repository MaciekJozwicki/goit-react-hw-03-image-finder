import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  handleEscapeKey = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey);
  }
  render() {
    const { url, alt } = this.props.imageObject;
    return (
      <div
        className={styles.overlay}
        onClick={this.props.handleIsModalOpenChange}
      >
        <div className="modal">
          <img className={styles.image} src={url} alt={alt} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  imageObject: PropTypes.object,
  isModalOpel: PropTypes.bool,
  handleIsModalOpenChange: PropTypes.func,
  closeModal: PropTypes.func,
};
export default Modal;
