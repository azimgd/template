import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import ProductFormComponentValidator from 'validators/ProductFormComponentValidator';
import { InputText, InputTextarea, InputSelect } from 'components/shared/SharedFormInputComponent';

const options = {
  0: 'Volvo',
  1: 'Mercedes',
  2: 'Kia',
};

const ProductFormComponent = ({ handleSubmit, createProduct }) =>
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
          <Field name="city" component={InputSelect} label="City" options={options} />
        </div>
      </div>

      <div className="ProductFormComponent-productForm">
        <div className="ProductFormComponent-productForm-input">
          <Field name="productTitle" component={InputText} label="Product title" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="productCategory" component={InputSelect} label="Product category" options={options} />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="productSubCategory" component={InputSelect} label="Product subcategory" options={options} />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="productDescription" component={InputTextarea} label="Product description" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <Field name="productPrice" component={InputText} label="Product price" />
        </div>
      </div>

      <button type="submit" className="ProductFormControlComponent-right-button">
        Create now
      </button>
    </form>
  </div>;

ProductFormComponent.propTypes = {
  createProduct: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ProductFormComponent',
  asyncValidate: ProductFormComponentValidator.asyncValidate,
})(ProductFormComponent);
