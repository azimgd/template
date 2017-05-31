import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { ConfigPageCategoriesContainer } from 'containers/ConfigPageCategoriesContainer/index';

const props = {
  getPageCategoriesRequest: sinon.spy(),
  getPageSubCategoriesRequest: sinon.spy(),
  postPageCategoryRequest: sinon.spy(),
  postPageSubCategoryRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<ConfigPageCategoriesContainer {...props} />);
  t.true(props.getPageCategoriesRequest.calledOnce);
  t.true(props.getPageSubCategoriesRequest.calledOnce);
});

test('has a .ConfigPageCategoriesContainer class name', (t) => {
  const wrapper = shallow(<ConfigPageCategoriesContainer {...props} />);
  t.is(wrapper.find('.ConfigPageCategoriesContainerBlock').length, 1);
  t.is(wrapper.find('.ConfigPageCategoriesContainer').length, 1);
});
