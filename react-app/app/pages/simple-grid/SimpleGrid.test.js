import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import SimpleGrid from './SimpleGrid.jsx';

describe('SimpleGrid', () => {

	test('Snapshot is equal to previous snapshot', () => {
        const tree = renderer
            .create(<SimpleGrid />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    const wrapper = mount(<SimpleGrid />);
    test('SimpleGrid Renders', () => {
        expect(wrapper.find('.simple-grid').length).toBe(1);
    });
});
