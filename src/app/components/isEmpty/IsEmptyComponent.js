import React, { PropTypes } from 'react';
import 'components/IsEmpty/_IsEmptyComponent.scss';

const IsEmptyComponent = ({ isEmpty, children }) => {
  if (isEmpty) {
    return <div className="IsEmptyComponent">No content available for this page</div>;
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

export default IsEmptyComponent;
