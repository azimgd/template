import { connect } from 'react-hz';

export default (ProductViewContainer) => connect(ProductViewContainer, {
  subscriptions: {
    product: (hz, props) => hz('products').find(props.params.id),
  },
});
