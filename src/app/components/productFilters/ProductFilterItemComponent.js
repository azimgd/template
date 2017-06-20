import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductFilters/_ProductFiltersComponent.scss';
import cx from 'classnames';

class ProductFilterItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setActiveItem = this.setActiveItem.bind(this);
  }

  setActiveItem(e) {
    e.preventDefault();
    this.props.setActiveItem(this.props.filter);
  }

  render() {
    const style = cx({
      ProductFilterItemComponent: true,
      'ProductFilterItemComponent--active': this.props.filter.isActive,
    });
    return (
      <div styleName="ProductFilterItemComponentBlock">
        <div className={style}>
          {this.props.filter.isActive ?
            <a href="" onClick={this.setActiveItem}>{this.props.filter.value} (x)</a>
          : null}

          {!this.props.filter.isActive ?
            <a href="" onClick={this.setActiveItem}>{this.props.filter.value}</a>
          : null}
        </div>
      </div>
    );
  }
}

ProductFilterItemComponent.propTypes = {
  filter: PropTypes.shape({
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default css(ProductFilterItemComponent, styles);
