import React from 'react';
import { mount } from 'enzyme';
import { AppContainer } from '.';

import { login } from '../../utils/test/auth';
import { history } from '../../utils/test/props';

describe('<AppContainer/>', () => {
  let wrapper;
  let authedWrapper;

  const props = { history };

  beforeEach(() => {
    wrapper = mount(
      <AppContainer {...props}>
        <div>This is a child</div>
      </AppContainer>,
    );

    login();

    authedWrapper = mount(<AppContainer {...props} />);
  });

  it('should render without crashing', () => {
    expect(() => mount(<AppContainer />)).not.toThrow();
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
