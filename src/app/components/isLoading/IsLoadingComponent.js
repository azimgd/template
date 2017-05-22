import React, { PropTypes } from 'react';

const IsLoadingComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return <div className="IsLoadingComponent">Content is loading ...</div>;
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

export default IsLoadingComponent;
