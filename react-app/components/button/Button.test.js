import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button.jsx';

describe('Button', () => {

	const data = {
		text: 'button text'
	};

	test('Snapshot is equal to previous snapshot', () => {
        const tree = renderer
            .create(<Button {...data} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    const wrapper = mount(<Button {...data} />);
    test('Button Renders', () => {
        expect(wrapper.find('.button').length).toBe(1);
    });

    test('Button Text is same as in props', () => {
        expect(wrapper.find('.button').text()).toBe('button text');
    });

    test('Button does not have class active on load', () => {
        expect(wrapper.find('.button').hasClass('active')).toBeFalsy();
    });

    test('Button does have class active if click on Button', () => {
    	wrapper.find('.button').simulate('click');
        expect(wrapper.find('.button').hasClass('active')).toBeTruthy();
    });
});
