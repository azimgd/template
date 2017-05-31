import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { ProductCreateContainer } from 'containers/ProductCreateContainer/index';

const props = {
  getProductCategoriesRequest: sinon.spy(),
  getProductSubCategoriesRequest: sinon.spy(),
  postProductRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<ProductCreateContainer {...props} />);
  t.true(props.getProductCategoriesRequest.calledOnce);
  t.true(props.getProductSubCategoriesRequest.calledOnce);
});

test('has a .ProductCreateContainer class name', (t) => {
  const wrapper = shallow(<ProductCreateContainer {...props} />);
  t.is(wrapper.find('.ProductCreateContainerBlock').length, 1);
  t.is(wrapper.find('.ProductCreateContainer').length, 1);
});
