import css from 'react-css-modules';

export default (component, styles, options = {}) =>
  css(component, styles, { allowMultiple: true, ...options });
