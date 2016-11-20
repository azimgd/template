import React, { PropTypes } from 'react';
import Slider from 'react-image-slider';

const ProductGalleryComponent = ({ images }) =>
  <div className="ProductGalleryComponentBlock">
    <div className="ProductGalleryComponent">
      <Slider images={images} isInfinite delay={5000} />
    </div>
  </div>;

ProductGalleryComponent.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductGalleryComponent;
