import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { id, img, alt, onePhoto, largeItem } = props;

  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      value={id}
      onClick={() => onePhoto(largeItem)}
    >
      <img className={css.ImageGalleryItemImage} src={img} alt={alt} />
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
