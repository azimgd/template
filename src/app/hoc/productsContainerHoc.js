import { connect } from 'react-hz';

export default (ProductsContainer) => connect(ProductsContainer, {
  subscriptions: {
    products: (hz) => hz('products'),
  },
});
