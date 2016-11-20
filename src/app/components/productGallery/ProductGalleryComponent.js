import React, { PropTypes } from 'react';
import Slider from 'react-image-slider';

const ProductGalleryComponent = ({ image }) => {
  const images = [
    '//placehold.it/600/1abc9c',
    '//placehold.it/600/3498db',
    '//placehold.it/600/2ecc71',
    '//placehold.it/600/9b59b6',
    '//placehold.it/600/f1c40f',
    '//placehold.it/600/e74c3c',
    '//placehold.it/600/e67e22',
  ];

  return (
    <div className="ProductGalleryComponentBlock">
      <div className="ProductGalleryComponent">
        <Slider images={images} isInfinite delay={5000} />
      </div>
    </div>
  );
};

ProductGalleryComponent.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ProductGalleryComponent;
