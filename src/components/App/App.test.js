import React from 'react';
import App from '.';
import {shallow} from '../../utils/enzyme';

describe('<App/>', () => {
  it('should render without crashing', () => {
    expect(() => shallow(<App/>)).not.toThrow();
  });
});
