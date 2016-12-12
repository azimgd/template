import React, { PropTypes } from 'react';
import Slider from 'react-image-slider';

const ProductGalleryComponent = ({ images }) =>
  <div className="ProductGalleryComponentBlock">
    <div className="ProductGalleryComponent">
      <Slider isInfinite delay={5000}>
        {images.map((image, key) => <div key={key}><img src={image} alt="" /></div>)}
      </Slider>
    </div>
  </div>;

ProductGalleryComponent.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductGalleryComponent;
