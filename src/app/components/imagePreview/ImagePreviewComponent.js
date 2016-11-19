import React, { PropTypes } from 'react';

const ImagePreviewComponent = ({ image }) =>
  <div className="ImagePreviewComponentBlock">
    <div className="ImagePreviewComponent">
      <div className="ImagePreviewComponent-title">
        {image.name}
      </div>
      <div className="ImagePreviewComponent-content">
        <img src={image.thumbnail} alt="" />
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
