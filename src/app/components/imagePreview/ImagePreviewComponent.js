import React, { PropTypes } from 'react';

const ImagePreviewComponent = ({ image }) => {
  const status = image.publicUrl ? 'Complete' : `Pending ${image.percent}%`;
  const backgroundImage = image.publicUrl ? `https://shoptemplate.s3-eu-west-1.amazonaws.com/${image.filename}` : image.thumbnail;
  const opacity = status === 'Complete' ? 1 : 0.5;

  return (
    <div className="ImagePreviewComponentBlock">
      <div className="ImagePreviewComponent">
        <div className="ImagePreviewComponent-title">
          {image.name}
        </div>
        <div className="ImagePreviewComponent-content">
          <div className="ImagePreviewComponent-content-image" style={{ backgroundImage: `url(${backgroundImage})`, opacity }} />
        </div>
        <div className="ImagePreviewComponent-footer">
          {status}
        </div>
      </div>
    </div>
  );
};

ImagePreviewComponent.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImagePreviewComponent;
