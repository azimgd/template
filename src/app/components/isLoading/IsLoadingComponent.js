import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/IsLoading/_IsLoadingComponent.scss';

const IsLoadingComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return <div styleName="IsLoadingComponent">Content is loading ...</div>;
  }
  return <div>{children}</div>;
};

IsLoadingComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default css(IsLoadingComponent, styles);
