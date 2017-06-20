import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ImagePreview/_ImagePreviewComponent.scss';

const ImagePreviewComponent = ({ image }) => {
  const backgroundImage = image.amazonUrl || image.thumbnail;
  const opacity = image.publicUrl ? 1 : 0.5;

  return (
    <div styleName="ImagePreviewComponentBlock">
      <div styleName="ImagePreviewComponent">
        <div styleName="ImagePreviewComponent-title">
          {image.name}
        </div>
        <div styleName="ImagePreviewComponent-content">
          <div styleName="ImagePreviewComponent-content-image" style={{ backgroundImage: `url(${backgroundImage})`, opacity }} />
        </div>
        <div styleName="ImagePreviewComponent-footer">
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

export default css(ImagePreviewComponent, styles);
