import React, { PropTypes } from 'react';
import * as Icons from 'react-icons/lib/io';

export const TitleIcon = ({ name }) => {
  const Component = Icons[name];
  return <Component style={{ fontSize: '1.25em', marginTop: '-4px' }} />;
};

TitleIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export const BodyIcon = ({ name }) => {
  const Component = Icons[name];
  return <Component />;
};

BodyIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export const ButtonIcon = ({ name }) => {
  const Component = Icons[name];
  return <Component style={{ fontSize: '1.1em', marginTop: '-4px' }} />;
};

ButtonIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
