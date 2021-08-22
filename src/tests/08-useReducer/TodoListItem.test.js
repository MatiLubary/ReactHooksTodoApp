import { shallow } from 'enzyme'
import React from 'react'
import { TodoListItem } from '../../components/08-useReducer/TodoListItem'
import { demoTodos } from "../fixtures/demoTodos";


//demoTodos

describe('tests with <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();



/*     let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setTodos={setTodos} />)


    })
 */

    const wrapper = shallow(
        <TodoListItem
            todo = {demoTodos[0]}
            index = {0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )



    test('should display properly', () => {
        expect(wrapper).toMatchSnapshot()
        
    })

    test('should call the delete function', () => {

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenLastCalledWith(demoTodos[0].id)
    })

    test('should call the toggle function', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenLastCalledWith(demoTodos[0].id)
    })

    test('should show the text correctly', () => {
       
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe(`1. ${demoTodos[0].desc}`)
        
    })


    test('should have the class complete if the todo is done TODO.done = true', () => {
       
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo = {todo}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true)



        
    })
    




    
    
    
})
