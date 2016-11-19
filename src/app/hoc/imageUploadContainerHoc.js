import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { generateFilePreviewAsync } from 'utils/index';

const mapStateToProps = (state) => ({
  images: state.imageUploadReducer.images,
});

const mapDispatchToProps = {
  startImageUpload: actions.startImageUpload,
  progressImageUpload: actions.progressImageUpload,
  errorImageUpload: actions.errorImageUpload,
  finishImageUpload: actions.finishImageUpload,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const onUploadStart = (file, next) => {
    generateFilePreviewAsync(file)
    .then((thumbnail) => dispatchProps.startImageUpload({ name: file.name, size: file.size, percent: 0, thumbnail }))
    .then(() => next(file));
  };
  const onUploadProgress = (percent, message, file) => {
    dispatchProps.progressImageUpload({ name: file.name, percent });
  };
  const onUploadError = (errorMessage, file) => {
    dispatchProps.errorImageUpload({ name: file.name, errorMessage });
  };
  const onUploadFinish = ({ publicUrl }, file) => {
    dispatchProps.finishImageUpload({ name: file.name, publicUrl });
  };

  return Object.assign({
    onUploadStart,
    onUploadProgress,
    onUploadError,
    onUploadFinish,
  }, ownProps, stateProps, dispatchProps);
};

export default (ImageUploadContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ImageUploadContainer);
