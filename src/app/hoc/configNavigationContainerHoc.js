import { connect } from 'react-hz';

export default (ConfigNavigationContainer) => connect(ConfigNavigationContainer, {
  subscriptions: {
    config: (hz) => hz('config'),
  },
});
