// eslint
const loaderUtils = require('loader-utils');
const path = require('path');

/**
 * Custom css name generation function that will strip unwanted chunks from hash
 */
module.exports = function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if (!options.context) {
    options.context = loaderContext.options && typeof loaderContext.options.context === 'string' ? loaderContext.options.context : loaderContext.context;
  }
  const request = path.relative(options.context, loaderContext.resourcePath);
  options.content = `${options.hashPrefix + request}+${localName}`;
  localIdentName = localIdentName.replace(/\[local\]/gi, localName);
  const hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);
  // _CartDropdownComponent__hidden-md1ecPo
  // 763e108b162a791d0cb1199d424a57e3
  // strip down vowels
  return hash
    .replace('Container', '')
    .replace('Component', '')
    .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
    .replace(/^((-?[0-9])|--)/, '_$1')
    .replace(/[aeiou]/ig, '');
};
