import React from 'react';
import { mount } from 'enzyme';
import App from '.';

describe('<App/>', () => {
  it('should render without crashing', () => {
    expect(() => mount(<App />)).not.toThrow();
  });
});
