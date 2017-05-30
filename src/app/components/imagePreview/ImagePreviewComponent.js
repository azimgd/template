import React, { PropTypes } from 'react';
import 'scss/components/_ImagePreviewComponent.scss';

const ImagePreviewComponent = ({ image }) => {
  const backgroundImage = image.amazonUrl || image.thumbnail;
  const opacity = image.publicUrl ? 1 : 0.5;

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
          {image.publicUrl ? 'Complete' : null}
          {!image.publicUrl && image.percent === 0 ? 'Preparing to upload' : null}
          {!image.publicUrl && image.percent > 0 ? `Pending ${image.percent}%` : null}
          {!image.publicUrl && image.percent < 0 ? 'Error while uploading' : null}
        </div>
      </div>
    </div>
  );
};

ImagePreviewComponent.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImagePreviewComponent;
