import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

export const mountWithRouter = (component, options = {}) => {
  return mount(<BrowserRouter>{component}</BrowserRouter>, options);
};
