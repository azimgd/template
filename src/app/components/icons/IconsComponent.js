import React, { PropTypes } from 'react';
import * as Icons from 'react-icons/lib/io';

export const TitleIconComponent = ({ name }) => {
  const Component = Icons[name];
  return <Component style={{ fontSize: '1.1em', marginTop: '-4px' }} />;
};

TitleIconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export const BodyIconComponent = ({ name }) => {
  const Component = Icons[name];
  return <Component />;
};

BodyIconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export const ButtonIconComponent = ({ name }) => {
  const Component = Icons[name];
  return <Component style={{ fontSize: '1.1em', marginTop: '-4px' }} />;
};

ButtonIconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
