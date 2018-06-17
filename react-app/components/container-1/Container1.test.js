import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Container1 from './Container1.jsx';
import Factory from './Container1.data.js';

let nonActiveUser = Factory.build('user');
let activeUser = Factory.build('user', {}, {verified: true});

describe('Container Non active', () => {
    const wrapper = mount(<Container1 {...nonActiveUser} />);
    test('Container1 Renders', () => {
        expect(wrapper.find('.msg').text()).toBe("Non active account");
    });
});

describe('Container active', () => {
    const wrapper = mount(<Container1 {...activeUser} />);
    test('Container active renders', () => {
        expect(wrapper.find('.active').text()).toBe("1000");
    });
});
