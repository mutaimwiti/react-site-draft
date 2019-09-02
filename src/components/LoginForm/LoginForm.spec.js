import React from 'react';
import LoginForm from '.';
import { mount} from '../../utils/test/enzyme';

describe('<LoginForm/>', () => {
  const props = {
      onLoginSuccess: jest.fn()
    }
  ;

  it('should render without crashing', () => {
    mount(<LoginForm {...props}/>)
  });
});
