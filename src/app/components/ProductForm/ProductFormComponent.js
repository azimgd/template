import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/ProductForm/_ProductFormComponent.scss';

import { Field, reduxForm } from 'redux-form';
import ProductFormComponentValidator from 'validators/ProductFormComponentValidator';
import { InputText, RichTextarea, InputSelect } from 'components/Shared/SharedFormInputComponent';

const ProductFormComponent = ({ children, categories, subCategories, handleSubmit, createProduct }) =>
  <div styleName="ProductFormComponentBlock">
    <form styleName="ProductFormComponent" onSubmit={handleSubmit(createProduct)}>
      <div styleName="ProductFormComponent-productForm">
        <div styleName="ProductFormComponent-productForm-input">
          <Field name="title" component={InputText} label="Product title" />
        </div>
        <div styleName="ProductFormComponent-productForm-input">
          <Field name="categoryId" component={InputSelect} label="Product category" options={categories} />
        </div>
        <div styleName="ProductFormComponent-productForm-input">
          <Field name="subCategoryId" component={InputSelect} label="Product subcategory" options={subCategories} />
        </div>
        <div styleName="ProductFormComponent-productForm-input">
          <Field name="description" component={RichTextarea} label="Product description" />
        </div>
        <div styleName="ProductFormComponent-productForm-input">
          <Field name="price" component={InputText} label="Product price" />
        </div>
      </div>

      {children}

      <button type="submit" styleName="ProductFormComponent-button">
        Create now
      </button>
    </form>
  </div>;

ProductFormComponent.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  createProduct: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  subCategories: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'ProductFormComponent',
  asyncValidate: ProductFormComponentValidator.asyncValidate,
})(css(ProductFormComponent, styles));
