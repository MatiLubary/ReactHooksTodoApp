import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import { Simulate } from "react-dom/test-utils";


describe('test in <RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('should display properly', () => {
        

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)


    })
    

    test('should display the component <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click')

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)

        
    })
    
    
})
