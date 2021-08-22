import React from 'react'
import { act } from "@testing-library/react"
import { mount, shallow } from "enzyme"
import { ToDoApp } from "../../components/08-useReducer/ToDoApp"
import { demoTodos } from '../fixtures/demoTodos'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });



describe('Tests in <ToDoApp />', () => {

    const wrapper = shallow(<ToDoApp />);

    Storage.prototype.setItem = jest.fn(()=> {})


    test('should display properly', () => {
        
        expect(wrapper).toMatchSnapshot
        
    });


    test('should add a TODO', () => {

        const wrapper = mount( <ToDoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop("handleAddTodo")(demoTodos[0])
            wrapper.find('TodoAdd').prop("handleAddTodo")(demoTodos[1])
        }) 

        expect( wrapper.find("h1").text().trim() ).toBe("TodoApp  (2)" );
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })
    

    test('should delete a todo', () => {

        wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0])
        wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id)

        expect( wrapper.find("h1").text().trim() ).toBe("TodoApp  (0)" );

        
    })
    
    
    
})
