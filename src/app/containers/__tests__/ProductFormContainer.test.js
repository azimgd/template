import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { ProductFormContainer } from 'containers/ProductFormContainer.js';

const props = {
  getProductCategoriesRequest: sinon.spy(),
  getProductSubCategoriesRequest: sinon.spy(),
  postProductRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<ProductFormContainer {...props} />);
  t.true(props.getProductCategoriesRequest.calledOnce);
  t.true(props.getProductSubCategoriesRequest.calledOnce);
});

test('has a .ProductFormContainer class name', (t) => {
  const wrapper = shallow(<ProductFormContainer {...props} />);
  t.is(wrapper.find('.ProductFormContainerBlock').length, 1);
  t.is(wrapper.find('.ProductFormContainer').length, 1);
});
