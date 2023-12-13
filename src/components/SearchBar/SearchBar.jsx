import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSearchValueChange(this.state.inputValue);
    this.props.removeItemsFromArray();
  };

  render() {
    return (
      <div className={styles.searchbar}>
        <header>
          <form onSubmit={this.onSubmit}>
            <button type="submit" className={styles.button}>
              <span className="button-label">Search</span>
            </button>

            <input
              className={styles.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleInputChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {
  handleSearchValueChange: PropTypes.func,
};

export default Searchbar;
