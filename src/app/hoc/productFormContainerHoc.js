import { connect } from 'react-hz';

export default (ProductFormContainer) => connect(ProductFormContainer, {
  mutations: {
    createProduct: (hz) => (product) => hz('products').store(product),
  },
});
