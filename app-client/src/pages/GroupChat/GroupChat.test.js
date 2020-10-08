import React from 'react';
import { shallow } from 'enzyme';
import GroupChat from './GroupChat';

describe('<GroupChat />', () => {
  test('renders', () => {
    const wrapper = shallow(<GroupChat />);
    expect(wrapper).toMatchSnapshot();
  });
});
