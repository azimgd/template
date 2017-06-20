import React, { PropTypes } from 'react';
import css from 'services/cssService';
import { randomString } from 'utils/index';

class UniqueIdentifierContainer extends React.Component {
  componentWillMount() {
    const uniqueIdentifier = randomString();
    this.setState({ uniqueIdentifier });
  }

  componentWillUnmount() {
    this.setState({ uniqueIdentifier: undefined });
  }

  render() {
    return React.cloneElement(this.props.children, { uniqueIdentifier: this.state.uniqueIdentifier });
  }
}

UniqueIdentifierContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default UniqueIdentifierContainer;
