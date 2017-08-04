import React, { PropTypes } from 'react';

export const TitleIconComponent = ({ name }) => (
  <i
    className={`fa fa-${name}`}
    style={{ fontSize: '1.1em', marginTop: '-4px' }}
    aria-hidden="true"
  />
);

TitleIconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export const BodyIconComponent = ({ name }) => (
  <i
    className={`fa fa-${name}`}
    aria-hidden="true"
  />
);

BodyIconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export const ButtonIconComponent = ({ name }) => (
  <i
    className={`fa fa-${name}`}
    style={{ fontSize: '1.1em', marginTop: '-4px' }}
    aria-hidden="true"
  />
);

ButtonIconComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
