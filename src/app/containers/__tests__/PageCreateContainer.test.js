import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { PageCreateContainer } from 'containers/PageCreateContainer/index';

const props = {
  getPageCategoriesRequest: sinon.spy(),
  getPageSubCategoriesRequest: sinon.spy(),
  postPageRequest: sinon.spy(),
};

test('calls required actions on render', (t) => {
  shallow(<PageCreateContainer {...props} />);
  t.true(props.getPageCategoriesRequest.calledOnce);
  t.true(props.getPageSubCategoriesRequest.calledOnce);
});

test('has a .PageCreateContainer class name', (t) => {
  const wrapper = shallow(<PageCreateContainer {...props} />);
  t.is(wrapper.find('.PageCreateContainerBlock').length, 1);
  t.is(wrapper.find('.PageCreateContainer').length, 1);
});
