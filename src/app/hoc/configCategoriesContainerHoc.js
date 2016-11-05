import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  categories: null,
  subCategories: null,
});

const mapDispatchToProps = {
  createNewCategory: null,
  createNewSubCategory: null,
};

export default (ConfigCategoriesContainer) => connect(mapStateToProps, mapDispatchToProps)(ConfigCategoriesContainer);
