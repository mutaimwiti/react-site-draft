import React from 'react';
import App from '.';
import {mount} from '../../utils/enzyme';

describe('<App/>', () => {
  it('should render without crashing', () => {
    expect(() => mount(<App/>)).not.toThrow();
  });
});
