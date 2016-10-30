import { connect } from 'react-hz';

export default (PagesContainer) => connect(PagesContainer, {
  subscriptions: {
    pages: (hz) => hz('pages'),
  },
});
