import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { ProductViewContainer } from 'containers/ProductViewContainer/index';

const props = {
  getProductRequest: sinon.spy(),
  params: { id: 123 },
  product: {
    data: {},
  },
};

test('calls required actions on render', (t) => {
  shallow(<ProductViewContainer {...props} />);
  t.true(props.getProductRequest.calledOnce);
  t.true(props.getProductRequest.calledWith(props.params));
});

test('has a .ProductViewContainer class name', (t) => {
  const wrapper = shallow(<ProductViewContainer {...props} />);
  t.is(wrapper.find('.ProductViewContainerBlock').length, 1);
  t.is(wrapper.find('.ProductViewContainer').length, 1);
});
