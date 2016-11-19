import React, { PropTypes } from 'react';
import ReactUploader from 'react-s3-uploader';
import imageUploadContainerHoc from 'hoc/imageUploadContainerHoc';
import { TitleIconComponent } from 'components/icons/IconsComponent';

class ImageUploadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateConfig = this.updateConfig.bind(this);
  }

  updateConfig() {}

  render() {
    return (
      <div className="ImageUploadContainerBlock">
        <div className="ImageUploadContainerBlock-title">
          <TitleIconComponent name="IoGearA" /> Config
        </div>
        <div className="ImageUploadContainer">
          <ReactUploader
            signingUrl="/s3/sign"
            accept="image/*"
            preprocess={this.onUploadStart}
            onProgress={this.onUploadProgress}
            onError={this.onUploadError}
            onFinish={this.onUploadFinish}
            uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}
            contentDisposition="auto"
            server="http://localhost:8080/api"
          />
        </div>
      </div>
    );
  }
}

ImageUploadContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default imageUploadContainerHoc(ImageUploadContainer);
