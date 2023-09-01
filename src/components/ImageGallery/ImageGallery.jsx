import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ photos, imageAddress }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(photo => {
        const { id, webformatURL, tags, largeImageURL } = photo;
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            imageAddress={imageAddress}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  imageAddress: PropTypes.func.isRequired,
};
export default ImageGallery;
