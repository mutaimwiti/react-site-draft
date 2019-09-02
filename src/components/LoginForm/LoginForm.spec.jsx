import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '.';

describe('<LoginForm/>', () => {
  const props = {
    onLoginSuccess: jest.fn(),
  };
  it('should render without crashing', () => {
    mount(<LoginForm {...props} />);
  });
});
