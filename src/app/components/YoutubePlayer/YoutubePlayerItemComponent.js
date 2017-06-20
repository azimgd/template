import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/YoutubePlayer/_YoutubePlayerComponent.scss';
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
        <div styleName="YoutubePlayerItemComponent-title">{get(this.props.options, 'value.title', 'unavailable')}</div>
        <div styleName="YoutubePlayerItemComponent-nav"><a href="" onClick={this.setActiveItem}>play</a></div>
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

export default css(YoutubePlayerItemComponent, styles);
