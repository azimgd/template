import { connect } from 'react-hz';

export default (ConfigContainer) => connect(ConfigContainer, {
  subscriptions: {
    config: (hz) => hz('config'),
  },
});
