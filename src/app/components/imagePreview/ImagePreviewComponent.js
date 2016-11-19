import React, { PropTypes } from 'react';

const ImagePreviewComponent = ({ image }) =>
  <div className="ImagePreviewComponentBlock">
    <div className="ImagePreviewComponent">
      <div className="ImagePreviewComponent-title">
        {image.name}
      </div>
      <div className="ImagePreviewComponent-content">
        <div className="ImagePreviewComponent-content-image" style={{ backgroundImage: `url(${image.thumbnail})`, opacity: image.percent === 100 ? 1 : 0.5 }} />
      </div>
      <div className="ImagePreviewComponent-footer">
        {image.percent}
      </div>
    </div>
  </div>;

ImagePreviewComponent.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImagePreviewComponent;
