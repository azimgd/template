import React, { PropTypes } from 'react';
import map from 'lodash/map';
import youtubePlayerHoc from 'components/youtubePlayer/YoutubePlayerHoc';
import YoutubePlayerActiveComponent from 'components/youtubePlayer/YoutubePlayerActiveComponent';
import YoutubePlayerItemComponent from 'components/youtubePlayer/YoutubePlayerItemComponent';

const YoutubePlayerComponent = ({ setActiveItem, activeItem, inactiveItems }) =>
  <div>
    <div className="YoutubePlayerActive">
      <YoutubePlayerActiveComponent item={activeItem} />
    </div>

    <div className="YoutubePlayerItems">
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

export default youtubePlayerHoc(YoutubePlayerComponent);
