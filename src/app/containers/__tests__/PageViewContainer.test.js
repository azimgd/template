import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { PageViewContainer } from 'containers/PageViewContainer/index';

const props = {
  getPageRequest: sinon.spy(),
  params: { id: 123 },
  page: {
    data: {},
  },
};

test('calls required actions on render', (t) => {
  shallow(<PageViewContainer {...props} />);
  t.true(props.getPageRequest.calledOnce);
  t.true(props.getPageRequest.calledWith(props.params));
});

test('has a .PageViewContainer class name', (t) => {
  const wrapper = shallow(<PageViewContainer {...props} />);
  t.is(wrapper.find('.PageViewContainerBlock').length, 1);
  t.is(wrapper.find('.PageViewContainer').length, 1);
});
