import { connect } from 'react-redux';
import marked from 'marked';
import _ from 'lodash';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  page: state.pagesReducer.page,
});

const mapDispatchToProps = {
  getPageRequest: actions.getPageRequest,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const pageContents = _.get(stateProps.page, 'data.content', '');
  const pageParsedToHtml = marked(pageContents);
  return Object.assign({
    pageParsedToHtml,
  }, ownProps, stateProps, dispatchProps);
};

export default (PageViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageViewContainer);
