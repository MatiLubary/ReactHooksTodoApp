import { shallow, mount } from 'enzyme'
import React from 'react'
import { TodoAdd } from '../../components/08-useReducer/TodoAdd'

describe('tests in <TodoAdd />', () => {


    const handleAddTodo = jest.fn()

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo = {handleAddTodo}
        />
    )
    
    test('should display properly', () => {

        expect(wrapper).toMatchSnapshot();

        
    })



    test('should not call handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0)
        
    })


    test('should call function handleAddTodo', () => {

        wrapper.find('input').at(0).simulate('change', {target: {name: 'description', value: 'Hola'}});
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault: ()=>{}});
        expect(handleAddTodo).toHaveBeenCalled();
        
        
    })
    
    



})
