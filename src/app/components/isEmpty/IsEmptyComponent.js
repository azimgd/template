import React, { PropTypes } from 'react';

const IsEmptyComponent = ({ isEmpty, children }) => {
  if (isEmpty) {
    return <div className="IsEmptyComponent">No content available for this page</div>;
  }
  return <div>{children}</div>;
};

IsEmptyComponent.propTypes = {
  isEmpty: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default IsEmptyComponent;
