import React, { useEffect, useReducer } from 'react'

import "./styles.css"
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem("todos")) || [];



/*     return [{
            id: new Date().getTime(),
            desc: "asdfs",
            done: false
        }] */
}


export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);



    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    const handleDelete = (todoId) => {
        

        const action = {
            type: "delete",
            payload: todoId
        }

        dispatch(action)

    }

    const handleToggle = (todoId) => {

        dispatch({
            type: "toggle",
            payload: todoId
        })

    }


    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }



    return (
        <div>

            
            <h1>TodoApp  ({todos.length})  </h1>
            <hr />

            <div className="row">

                <div className="col-6 border mRa">
                    

                    <TodoList 
                        todos = {todos}
                        handleDelete = {handleDelete}
                        handleToggle =  {handleToggle}
                    />

                </div>

                <div className="col-5 border">
                    
                    
                <TodoAdd 
                    handleAddTodo={handleAddTodo}
                
                />


                </div>
                
            </div>


        </div>
    )
}
