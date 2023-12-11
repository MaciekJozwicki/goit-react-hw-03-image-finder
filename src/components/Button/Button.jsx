import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export class Button extends Component {
  render() {
    return (
      <button
        className={styles.loadMore}
        onClick={this.props.handleIncrementPage}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  handleIncrementPage: PropTypes.func,
};
export default Button;
