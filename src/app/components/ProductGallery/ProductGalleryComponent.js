import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductGallery/_ProductGalleryComponent.scss';

import Slider from 'react-image-slider';

const ProductGalleryComponent = ({ images }) =>
  <div styleName="ProductGalleryComponentBlock">
    <div styleName="ProductGalleryComponent">
      <Slider isInfinite delay={5000}>
        {images.map((image, key) => <div key={key}><img src={image.amazonUrl} alt="" /></div>)}
      </Slider>
    </div>
  </div>;

ProductGalleryComponent.propTypes = {
  images: PropTypes.array.isRequired,
};

export default css(ProductGalleryComponent, styles);
