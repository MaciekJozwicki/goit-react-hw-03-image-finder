import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { id, webformatURL, largeImageURL, tags, imageAddress } = props;

  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      value={id}
      onClick={() => imageAddress(largeImageURL)}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  imageAddress: PropTypes.func,
};

export default ImageGalleryItem;
