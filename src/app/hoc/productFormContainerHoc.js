import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  product: null,
});

const mapDispatchToProps = {
  createProduct: actions.postProductRequest,
};

export default (ProductFormContainer) => connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer);
