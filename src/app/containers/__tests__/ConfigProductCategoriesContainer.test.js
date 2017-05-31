import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { ConfigProductCategoriesContainer } from 'containers/ConfigProductCategoriesContainer/index';

const props = {
  getProductCategoriesRequest: sinon.spy(),
  getProductSubCategoriesRequest: sinon.spy(),
  postProductCategoryRequest: sinon.spy(),
  postProductSubCategoryRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<ConfigProductCategoriesContainer {...props} />);
  t.true(props.getProductCategoriesRequest.calledOnce);
  t.true(props.getProductSubCategoriesRequest.calledOnce);
});

test('has a .ConfigProductCategoriesContainer class name', (t) => {
  const wrapper = shallow(<ConfigProductCategoriesContainer {...props} />);
  t.is(wrapper.find('.ConfigProductCategoriesContainerBlock').length, 1);
  t.is(wrapper.find('.ConfigProductCategoriesContainer').length, 1);
});
