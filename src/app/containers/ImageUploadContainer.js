import React, { PropTypes } from 'react';

import imageUploadContainerHoc from 'hoc/imageUploadContainerHoc';
import ImagePreviewComponent from 'components/imagePreview/ImagePreviewComponent';
import ImageUploadComponent from 'components/imageUpload/ImageUploadComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';

class ImageUploadContainer extends React.Component {
  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { images } = this.props;
    const config = {
      signingUrl: '/s3/sign',
      accept: 'image/*',
      onUploadStart: this.props.onUploadStart,
      onUploadProgress: this.props.onUploadProgress,
      onUploadError: this.props.onUploadError,
      onUploadFinish: this.props.onUploadFinish,
      uploadRequestHeaders: { 'x-amz-acl': 'public-read' },
      multiple: 'true',
      server: 'http://localhost:8080/api',
    };

    return (
      <div className="ImageUploadContainerBlock">
        <div className="ImageUploadContainerBlock-title">
          <TitleIconComponent name="IoGearA" /> Config
        </div>
        <div className="ImageUploadContainer">
          {images.data && images.data.map((image, key) => <div key={key}><ImagePreviewComponent image={image} /></div>)}
          <ImageUploadComponent {...config} />
        </div>
      </div>
    );
  }
}

ImageUploadContainer.propTypes = {
  images: PropTypes.object.isRequired,
  onUploadStart: PropTypes.func.isRequired,
  onUploadProgress: PropTypes.func.isRequired,
  onUploadError: PropTypes.func.isRequired,
  onUploadFinish: PropTypes.func.isRequired,
};

export default imageUploadContainerHoc(ImageUploadContainer);
