import React from 'react';
import {mount, shallow} from 'enzyme';
import {BrowserRouter} from "react-router-dom";

const mountWithRouter = (component, options = {}) => {
  return mount(<BrowserRouter>{component}</BrowserRouter>);
};

export {mount, shallow, mountWithRouter};
