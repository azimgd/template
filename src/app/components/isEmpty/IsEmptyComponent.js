import React, { PropTypes } from 'react';

const IsEmptyComponent = ({ isEmpty, children }) => {
  if (isEmpty) {
    return <div>Is empty</div>;
  }
  return <div>{children}</div>;
};

IsEmptyComponent.propTypes = {
  isEmpty: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default IsEmptyComponent;
