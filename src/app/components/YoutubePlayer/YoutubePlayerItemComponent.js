import React, { PropTypes } from 'react';
import get from 'lodash/get';
import cx from 'classnames';

class YoutubePlayerItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setActiveItem = this.setActiveItem.bind(this);
  }

  setActiveItem(e) {
    e.preventDefault();
    this.props.setActiveItem(this.props.options);
  }

  render() {
    const style = cx({
      YoutubePlayerItemComponent: true,
      'YoutubePlayerItemComponent--active': get(this.props.options, 'isActive'),
    });
    return (
      <div className={style}>
        <div className="YoutubePlayerItemComponent-title">{get(this.props.options, 'value.title', 'unavailable')}</div>
        <div className="YoutubePlayerItemComponent-nav"><a href="" onClick={this.setActiveItem}>play</a></div>
      </div>
    );
  }
}

YoutubePlayerItemComponent.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default YoutubePlayerItemComponent;
