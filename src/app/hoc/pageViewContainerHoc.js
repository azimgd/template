import { connect } from 'react-hz';

export default (PageViewContainer) => connect(PageViewContainer, {
  subscriptions: {
    page: (hz, props) => hz('pages').find(props.params.id),
  },
});
