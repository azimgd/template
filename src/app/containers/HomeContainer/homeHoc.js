import { connect } from 'react-redux';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty } from 'utils/index';

const mapStateToProps = (state) => ({
  pageCategories: state.pageCategoriesReducer.pageCategories,
  productCategories: state.productCategoriesReducer.productCategories,
});

const mapDispatchToProps = {
  getPageCategoriesRequest: actions.getPageCategoriesRequest,
  getPageCategoriesIdle: actions.getPageCategoriesIdle,
  getProductCategoriesRequest: actions.getProductCategoriesRequest,
  getProductCategoriesIdle: actions.getProductCategoriesIdle,
};

const componentWillMount = (stateProps, dispatchProps) => {
  dispatchProps.getPageCategoriesRequest();
  dispatchProps.getProductCategoriesRequest();
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getPageCategoriesIdle();
  dispatchProps.getProductCategoriesIdle();
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = false;
  const isEmpty = isInputArrayContentEmpty([
    stateProps.productCategories.data,
    stateProps.pageCategories.data,
  ]);
  return Object.assign({
    isLoading,
    isEmpty,
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (HomeContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(HomeContainer);
