import { connect } from 'react-hz';

export default (ConfigCategoriesContainer) => connect(ConfigCategoriesContainer, {
  subscriptions: {
    config: (hz) => hz('config'),
  },
});
