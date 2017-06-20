import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/IsEmpty/_IsEmptyComponent.scss';

const IsEmptyComponent = ({ isEmpty, children }) => {
  if (isEmpty) {
    return <div styleName="IsEmptyComponent">No content available for this page</div>;
  }
  return <div>{children}</div>;
};

IsEmptyComponent.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default css(IsEmptyComponent, styles);
