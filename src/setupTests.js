import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import {mount, shallow, render, configure} from 'enzyme';

configure({ adapter: new Adapter() });

const mountWithRouter = (component, options = {}) => {
  return mount(<BrowserRouter>{component}</BrowserRouter>, options);
};

global.React = React;
global.mount = mount;
global.shallow = shallow;
global.render = render;
global.mountWithRouter = mountWithRouter;
