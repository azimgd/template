import React, { PropTypes } from 'react';
import 'components/ImageUpload/_ImageUploadComponent.scss';

import ReactUploader from 'react-s3-uploader';

const ImageUploadComponent = (props) =>
  <div className="ImageUploadComponentBlock">
    <div className="ImageUploadComponent">
      <label>Image uploader</label>
      <ReactUploader
        signingUrl={props.signingUrl}
        accept={props.accept}
        preprocess={props.onUploadStart}
        onProgress={props.onUploadProgress}
        onError={props.onUploadError}
        onFinish={props.onUploadFinish}
        uploadRequestHeaders={props.uploadRequestHeaders}
        contentDisposition="auto"
        key={Math.random()}
        multiple={props.multiple}
        server={props.server}
      />
    </div>
  </div>;

ImageUploadComponent.propTypes = {
  signingUrl: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  onUploadStart: PropTypes.func.isRequired,
  onUploadProgress: PropTypes.func.isRequired,
  onUploadError: PropTypes.func.isRequired,
  onUploadFinish: PropTypes.func.isRequired,
  uploadRequestHeaders: PropTypes.object.isRequired,
  multiple: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
};

export default ImageUploadComponent;
