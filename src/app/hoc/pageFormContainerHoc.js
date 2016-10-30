import { connect } from 'react-hz';

export default (PageFormContainer) => connect(PageFormContainer, {
  mutations: {
    createPage: (hz) => (page) => hz('pages').store(page),
  },
});
