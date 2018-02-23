import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App.jsx';

describe('App', () => {
    
    const wrapper = mount(<App />);
    test('App Renders', () => {
        expect(wrapper.find('.main-app').length).toBe(1);
    });
});
