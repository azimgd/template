import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/YoutubePlayer/_YoutubePlayerComponent.scss';
import get from 'lodash/get';

const YoutubePlayerActiveComponent = ({ item }) =>
  <div styleName="YoutubePlayerActiveComponent">
    <iframe
      src={`${get(item, 'value.iframe', 'unavailable')}`}
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

export default css(YoutubePlayerActiveComponent, styles);
