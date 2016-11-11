import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as actions from 'actions/index';
import { transformCategories, filterSubCategories } from 'utils/index';

const selector = formValueSelector('ProductFormComponent');

const mapStateToProps = (state) => ({
  productCategories: state.productCategoriesReducer.productCategories,
  productSubCategories: state.productSubCategoriesReducer.productSubCategories,
  formCategoryId: selector(state, 'categoryId'),
});

const mapDispatchToProps = {
  postProductRequest: actions.postProductRequest,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductSubCategoriesRequest: actions.getProductSubCategoriesRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mappedCategories = transformCategories(stateProps.productCategories.data);
  const filteredSubCategories = filterSubCategories(stateProps.productSubCategories.data, { categoryId: stateProps.formCategoryId });
  const mappedSubCategories = transformCategories(filteredSubCategories);
  return Object.assign({
    mappedCategories,
    mappedSubCategories,
  }, ownProps, stateProps, dispatchProps);
};

export default (ProductFormContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductFormContainer);
