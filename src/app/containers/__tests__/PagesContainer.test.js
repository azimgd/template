import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { PagesContainer } from 'containers/PagesContainer.js';

const props = {
  getPageCategoriesRequest: sinon.spy(),
  getPagesRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<PagesContainer {...props} />);
  t.true(props.getPagesRequest.calledOnce);
  t.true(props.getPageCategoriesRequest.calledOnce);
});

test('has a .PagesContainer class name', (t) => {
  const wrapper = shallow(<PagesContainer {...props} />);
  t.is(wrapper.find('.PagesContainerBlock').length, 1);
  t.is(wrapper.find('.PagesContainer').length, 1);
});
