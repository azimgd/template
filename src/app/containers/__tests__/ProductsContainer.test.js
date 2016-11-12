import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { ProductsContainer } from 'containers/ProductsContainer.js';

const props = {
  getProductCategoriesRequest: sinon.spy(),
  getProductsRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<ProductsContainer {...props} />);
  t.true(props.getProductCategoriesRequest.calledOnce);
  t.true(props.getProductsRequest.calledOnce);
});

test('has a .ProductsContainer class name', (t) => {
  const wrapper = shallow(<ProductsContainer {...props} />);
  t.is(wrapper.find('.ProductsContainerBlock').length, 1);
  t.is(wrapper.find('.ProductsContainer').length, 1);
});
