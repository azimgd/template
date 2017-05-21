import React, { PropTypes } from 'react';
import filter from 'lodash/filter';
import first from 'lodash/first';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';

const youtubePlayerHoc = (YoutubePlayerComponent) => {
  class YoutubePlayerHoc extends React.Component {
    constructor(props) {
      super(props);
      this.setActiveItem = this.setActiveItem.bind(this);
    }

    componentWillMount() {
      const activeItem = this.getActiveItem(this.props.youtubeOptions);
      const inactiveItems = this.filterActiveItem(this.props.youtubeOptions, activeItem);
      this.setState({ activeItem, inactiveItems });
    }

    setActiveItem(nextActiveItem) {
      const activeItem = this.getActiveItem(this.props.youtubeOptions, nextActiveItem);
      const inactiveItems = this.filterActiveItem(this.props.youtubeOptions, nextActiveItem);
      this.setState({ activeItem, inactiveItems });
    }

    getActiveItem(items, activeItem) {
      if (activeItem) {
        return find(items, { value: activeItem.value });
      }
      return first(items);
    }

    filterActiveItem(items, activeItem) {
      const list = [].concat(items);
      const index = findIndex(list, { value: activeItem.value });
      list.splice(index, 1, { ...activeItem, ...{ isActive: true } });
      return list;
    }

    render() {
      return (
        <YoutubePlayerComponent
          setActiveItem={this.setActiveItem}
          activeItem={this.state.activeItem}
          inactiveItems={this.state.inactiveItems}
          {...this.props}
        />
      );
    }
  }

  YoutubePlayerHoc.propTypes = {
    youtubeOptions: PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  };

  return YoutubePlayerHoc;
};

export default youtubePlayerHoc;
