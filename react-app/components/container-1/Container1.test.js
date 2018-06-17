import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Container1 from './Container1.jsx';

describe('Container1', () => {
    const wrapper = mount(<Container1 />);
    test('Container1 Renders', () => {
        expect(wrapper.find('.button').length).toBe(1);
    });
});
