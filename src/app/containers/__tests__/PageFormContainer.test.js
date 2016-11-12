import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { PageFormContainer } from 'containers/PageFormContainer.js';

const props = {
  getPageCategoriesRequest: sinon.spy(),
  getPageSubCategoriesRequest: sinon.spy(),
  postPageRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<PageFormContainer {...props} />);
  t.true(props.getPageCategoriesRequest.calledOnce);
  t.true(props.getPageSubCategoriesRequest.calledOnce);
});

test('has a .PageFormContainer class name', (t) => {
  const wrapper = shallow(<PageFormContainer {...props} />);
  t.is(wrapper.find('.PageFormContainerBlock').length, 1);
  t.is(wrapper.find('.PageFormContainer').length, 1);
});
