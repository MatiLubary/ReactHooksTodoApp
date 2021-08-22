import React from 'react'
import { shallow } from 'enzyme'
import { HooksApp } from '../HooksApp'



describe('tests in <HooksApp /> ', () => {

    test('should show properly', () => {

        const wrapper = shallow( <HooksApp /> );
        expect(wrapper).toMatchSnapshot()
        
    })
    
    
})
