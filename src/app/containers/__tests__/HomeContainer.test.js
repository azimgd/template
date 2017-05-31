import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { HomeContainer } from 'containers/HomeContainer/index';

const props = {
  getPageCategoriesRequest: sinon.spy(),
  getPageSubCategoriesRequest: sinon.spy(),
  getProductCategoriesRequest: sinon.spy(),
  getProductSubCategoriesRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<HomeContainer {...props} />);
  t.true(props.getPageCategoriesRequest.calledOnce);
  t.true(props.getPageSubCategoriesRequest.calledOnce);
  t.true(props.getProductCategoriesRequest.calledOnce);
  t.true(props.getProductSubCategoriesRequest.calledOnce);
});

test('has a .HomeContainer class name', (t) => {
  const wrapper = shallow(<HomeContainer {...props} />);
  t.is(wrapper.find('.HomeContainerBlock').length, 1);
  t.is(wrapper.find('.HomeContainer').length, 1);
});
