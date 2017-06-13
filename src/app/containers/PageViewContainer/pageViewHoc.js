import { connect } from 'react-redux';
import marked from 'marked';
import _ from 'lodash';
import * as actions from 'actions/index';
import { isInputArrayContentEmpty, allItemsAreFalsy } from 'utils/index';

const mapStateToProps = (state) => ({
  page: state.pagesReducer.page,
  getPageRequest: state.pagesReducer.actions.getPage,
});

const mapDispatchToProps = {
  getPageRequest: actions.getPageRequest,
  getPageIdle: actions.getPageIdle,
};

const componentWillMount = (stateProps, dispatchProps, ownProps) => {
  const { id } = ownProps.params;
  dispatchProps.getPageRequest({ id });
};

const componentWillUnmount = (stateProps, dispatchProps) => {
  dispatchProps.getPageIdle();
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const isLoading = allItemsAreFalsy([stateProps.getPageRequest.isLoading]);
  const isEmpty = isInputArrayContentEmpty([stateProps.page.data]);
  const pageContents = _.get(stateProps.page, 'data.content', '');
  const pageParsedToHtml = marked(pageContents);
  return Object.assign({
    pageParsedToHtml,
    isLoading,
    isEmpty,
    componentWillMount: componentWillMount.bind(null, stateProps, dispatchProps, ownProps),
    componentWillUnmount: componentWillUnmount.bind(null, stateProps, dispatchProps, ownProps),
  }, ownProps, stateProps, dispatchProps);
};

export default (PageViewContainer) => connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageViewContainer);
