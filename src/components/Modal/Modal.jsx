import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export class Modal extends Component {
  render() {
    const { url, alt } = this.props.imageObject;
    return (
      <div
        className={styles.overlay}
        onClick={this.props.handleIsModalOpenChange}>
        <div className='modal'>
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
};
export default Modal;
