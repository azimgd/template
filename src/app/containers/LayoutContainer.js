import React, { PropTypes } from 'react';

const LayoutContainer = ({ children }) =>
  <div>{children}</div>;

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LayoutContainer;
