import React from 'react';

const ProductFormComponent = () =>
  <div className="ProductFormComponentBlock">
    <div className="ProductFormComponent">
      <div className="ProductFormComponent-contactForm">
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Address" />
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">City</label>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="ProductFormComponent-contactForm-input">
          <label htmlFor="">Category</label>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

      <div className="ProductFormComponent-productForm">
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Subject</label>
          <input type="text" placeholder="Subject" />
        </div>
        <div className="ProductFormComponent-productForm-input">
          <label htmlFor="">Message</label>
          <textarea placeholder="Email" />
        </div>
      </div>
    </div>
  </div>;

ProductFormComponent.propTypes = {
};

export default ProductFormComponent;
