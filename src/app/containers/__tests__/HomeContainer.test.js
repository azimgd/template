import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from 'containers/HomeContainer.js';

test('has a .HomeContainer class name', (t) => {
  const wrapper = shallow(<HomeContainer />);
  t.true(wrapper.hasClass('HomeContainerBlock'));
});
