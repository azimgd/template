import React, { PropTypes } from 'react';
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
      <div className="ProductFilterItemComponentBlock">
        <div className={style}>
          <a href="" onClick={this.setActiveItem}>{this.props.filter.value}</a>
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

export default ProductFilterItemComponent;
