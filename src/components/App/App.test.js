import React from 'react';
import App from '.';
import {mount} from '../../utils/test/enzyme';

describe('<App/>', () => {
  it('should render without crashing', () => {
    expect(() => mount(<App/>)).not.toThrow();
  });
});
