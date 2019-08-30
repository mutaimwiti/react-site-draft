import React from 'react';
import {AppContainer} from '.';

import {mount, mountWithRouter} from '../../utils/enzyme';

describe('<AppContainer/>', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.setItem('auth', JSON.stringify(true));

    wrapper = mount(<AppContainer/>);
  });

  it('should render without crashing', () => {
    expect(() => mount(<AppContainer/>)).not.toThrow();
  });

  it('should render header and footer when authenticated', () => {
    const h1 = wrapper.find('h1');
    const text = wrapper.text();

    expect(h1.length).toBe(2);
    expect(text).toContain('Header');
    expect(text).toContain('Footer');
  });

  // it('should trigger handleClick when button is clicked', () => {
  //   const spy = jest.spyOn(wrapper.instance(), 'handleClick');
  //
  //   wrapper.find('button').simulate('click');
  //
  //   expect(spy).toHaveBeenCalled();
  // });
});
