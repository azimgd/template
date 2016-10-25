import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const ProductFormComponent = ({ handleSubmit, createProduct }) =>
  <div className="ProductFormComponentBlock">
    <form className="ProductFormComponent" onSubmit={handleSubmit(createProduct)}>
      <div className="ProductFormComponent-contactForm">
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Name</label>
          <Field name="name" component="input" type="text" placeholder="Name" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Email</label>
          <Field name="email" component="input" type="text" placeholder="Email" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Phone number</label>
          <Field name="phone" component="input" type="text" placeholder="Phone number" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Address</label>
          <Field name="address" component="input" type="text" placeholder="Address" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">City</label>
          <Field name="city" component="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Field>
        </div>
      </div>

      <div className="ProductFormComponent-productForm">
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Product title</label>
          <Field name="productTitle" component="input" type="text" placeholder="Product title" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Category</label>
          <Field name="productCategory" component="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Field>
        </div>
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Subcategory</label>
          <Field name="productSubCategory" component="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Field>
        </div>
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Description</label>
          <Field name="productDescription" component="textarea" placeholder="Product description" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Product price</label>
          <Field name="productPrice" component="input" type="text" placeholder="Product price" />
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
})(ProductFormComponent);
