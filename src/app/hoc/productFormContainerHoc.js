import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as actions from 'actions/index';
import { transformCategories, getFailedNotifications, getSucceededNotifications, filterSubCategories, generateFilePreviewAsync } from 'utils/index';

const selector = formValueSelector('ProductFormComponent');

const mapStateToProps = (state) => ({
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
  formCategoryId: selector(state, 'categoryId'),
  productsActions: state.productsReducer.actions,

  /**
   * Image upload
   */
  images: state.imageUploadReducer.images,
});

const mapDispatchToProps = {
  postProductRequest: actions.postProductRequest,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
  getProductSubCategoriesIdle: actions.getProductSubCategoriesIdle,

  /**
   * Image upload
   */
  startImageUpload: actions.startImageUpload,
  progressImageUpload: actions.progressImageUpload,
  errorImageUpload: actions.errorImageUpload,
  finishImageUpload: actions.finishImageUpload,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.productCategories.data);
  const filteredSubCategories = filterSubCategories(stateProps.productSubCategories.data, { categoryId: stateProps.formCategoryId });
  const mappedSubCategories = transformCategories(filteredSubCategories);
  const notificationsSuccess = getSucceededNotifications([
    stateProps.productsActions.postProduct,
  ]);
  const notificationsFailure = getFailedNotifications([
    stateProps.productsActions.postProduct,
  ]);

  /**
   * Image upload
   */
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
    notificationsSuccess,
    notificationsFailure,
    mappedCategories,
    mappedSubCategories,

    /**
     * Image upload
     */
    onUploadStart,
    onUploadProgress,
    onUploadError,
    onUploadFinish,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductFormContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductFormContainer);
