import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/YoutubePlayer/_YoutubePlayerComponent.scss';

import map from 'lodash/map';
import youtubePlayerHoc from 'components/YoutubePlayer/YoutubePlayerHoc';
import YoutubePlayerActiveComponent from 'components/YoutubePlayer/YoutubePlayerActiveComponent';
import YoutubePlayerItemComponent from 'components/YoutubePlayer/YoutubePlayerItemComponent';

const YoutubePlayerComponent = ({ setActiveItem, activeItem, inactiveItems }) =>
  <div>
    <div styleName="YoutubePlayerActive">
      <YoutubePlayerActiveComponent item={activeItem} />
    </div>

    <div styleName="YoutubePlayerItems">
      {map(inactiveItems, (options, key) =>
        <div key={key}>
          <YoutubePlayerItemComponent
            setActiveItem={setActiveItem}
            options={options}
          />
        </div>
      )}
    </div>
  </div>;

YoutubePlayerComponent.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  inactiveItems: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default youtubePlayerHoc(css(YoutubePlayerComponent, styles));
