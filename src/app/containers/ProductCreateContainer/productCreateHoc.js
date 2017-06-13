import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as actions from 'actions/index';
import { transformCategories, transformSubCategories, filterSubCategories } from 'services/categoriesService';
import { transformProductImages } from 'services/productsService';
import { getFailedNotifications, getSucceededNotifications } from 'services/uiService';
import { generateFilePreviewAsync } from 'utils/index';

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
  postProductImageRequestBulk: actions.postProductImageRequestBulk,
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
const componentWillMount = (stateProps, dispatchProps) => {
  dispatchProps.getProductCategoriesRequest();
  dispatchProps.getProductSubCategoriesRequest();
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getProductCategoriesIdle();
  dispatchProps.getProductSubCategoriesIdle();
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.productCategories.data);
  const mappedSubCategories = transformSubCategories(filterSubCategories(stateProps.productSubCategories.data, { categoryId: stateProps.formCategoryId }));
  const mappedImages = transformProductImages(stateProps.images.data, { uniqueProductId: ownProps.uniqueIdentifier });
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
  const onUploadFinish = ({ publicUrl, filename }, file) => {
    dispatchProps.finishImageUpload({ name: file.name, publicUrl, filename });
  };
  return Object.assign({
    notificationsSuccess,
    notificationsFailure,
    mappedCategories,
    mappedSubCategories,
    mappedImages,

    /**
     * Image upload
     */
    onUploadStart,
    onUploadProgress,
    onUploadError,
    onUploadFinish,

    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductCreateContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductCreateContainer);
