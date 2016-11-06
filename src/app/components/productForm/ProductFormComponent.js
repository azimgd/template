import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import ProductFormComponentValidator from 'validators/ProductFormComponentValidator';
import { InputText, InputTextarea, InputSelect } from 'components/shared/SharedFormInputComponent';

const ProductFormComponent = ({ citiesList, categoriesList, subcategoriesList, handleSubmit, createProduct }) =>
  <div className="ProductFormComponentBlock">
    <form className="ProductFormComponent" onSubmit={handleSubmit(createProduct)}>
      <div className="ProductFormComponent-contactForm">
        <div className="ProductFormComponent-contactForm-input">
          <Field name="name" component={InputText} label="Name" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <Field name="email" component={InputText} label="Email" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <Field name="phone" component={InputText} label="Phone number" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <Field name="address" component={InputText} label="Address" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <Field name="city" component={InputSelect} label="City" options={citiesList} />
        </div>
      </div>

      <div className="ProductFormComponent-productForm">
        <div className="ProductFormComponent-productForm-input">
          <Field name="title" component={InputText} label="Product title" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="category" component={InputSelect} label="Product category" options={categoriesList} />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="subCategory" component={InputSelect} label="Product subcategory" options={subcategoriesList} />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="description" component={InputTextarea} label="Product description" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="price" component={InputText} label="Product price" />
        </div>
      </div>

      <button type="submit" className="ProductFormComponent-button">
        Create now
      </button>
    </form>
  </div>;

ProductFormComponent.propTypes = {
  createProduct: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  citiesList: PropTypes.object.isRequired,
  categoriesList: PropTypes.object.isRequired,
  subcategoriesList: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'ProductFormComponent',
  asyncValidate: ProductFormComponentValidator.asyncValidate,
})(ProductFormComponent);
