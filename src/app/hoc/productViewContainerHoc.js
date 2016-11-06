import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  product: state.productsReducer.product,
});

const mapDispatchToProps = {
  getProductRequest: actions.getProductRequest,
};

export default (ProductFormContainer) => connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer);
