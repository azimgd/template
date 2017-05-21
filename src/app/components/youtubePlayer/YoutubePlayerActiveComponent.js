import React, { PropTypes } from 'react';
import get from 'lodash/get';

const YoutubePlayerActiveComponent = ({ item }) =>
  <div className="YoutubePlayerActiveComponent">
    <iframe
      src={`${get(item, 'value', 'unavailable')}`}
      frameBorder="0"
      allowFullScreen
    />
  </div>;

YoutubePlayerActiveComponent.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default YoutubePlayerActiveComponent;
