import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  config: null,
});

const mapDispatchToProps = {
};

export default (ImageUploadContainer) => connect(mapStateToProps, mapDispatchToProps)(ImageUploadContainer);
