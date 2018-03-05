import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button.jsx';

describe('Button', () => {

	test('Snapshot is equal to previous snapshot', () => {
        const tree = renderer
            .create(<Button />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    const wrapper = mount(<Button />);
    test('Button Renders', () => {
        expect(wrapper.find('.button').length).toBe(1);
    });

    test('Button Text is same as in props', () => {
        expect(wrapper.find('.button').text()).toBe('Button');
    });

    test('Button have text "Button" on load', () => {
        expect(wrapper.find('.button').text()).toBe("Button");
    });

    test('Button have text "Button updated" on click', () => {
    	wrapper.find('.button').simulate('click');
        expect(wrapper.find('.button').text()).toBe("Button updated");
    });
});
