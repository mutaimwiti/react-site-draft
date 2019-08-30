import React from 'react';
import {AppContainer} from '.';

import {mount} from '../../utils/enzyme';

describe('<AppContainer/>', () => {
  let wrapper, authedWrapper;

  const props = {
    history: {
      push: jest.fn()
    }
  };

  beforeEach(() => {
    wrapper = mount(
      <AppContainer {...props}>
        <div>This is a child</div>
      </AppContainer>
    );

    localStorage.setItem('auth', JSON.stringify(true));

    authedWrapper = mount(<AppContainer {...props}/>);
  });

  it('should render without crashing', () => {
    expect(() => mount(<AppContainer/>)).not.toThrow();
  });

  it('should render header and footer when authenticated', () => {
    const h1 = authedWrapper.find('h1');
    const text = authedWrapper.text();

    expect(h1.length).toBe(2);
    expect(text).toContain('Header');
    expect(text).toContain('Footer');
  });

  it('should trigger handleClick when button is clicked', () => {
    const spy = jest.spyOn(authedWrapper.instance(), 'handleClick');

    authedWrapper.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should only render children when unauthenticated', () => {
    expect(wrapper.html()).toEqual('<div>This is a child</div>');
  });
});
