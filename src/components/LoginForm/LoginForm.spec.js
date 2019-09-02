import React from 'react';
import LoginForm from '.';

describe('<LoginForm/>', () => {
  const props = {
      onLoginSuccess: jest.fn()
    }
  ;

  it('should render without crashing', () => {
    mount(<LoginForm {...props}/>)
  });
});
