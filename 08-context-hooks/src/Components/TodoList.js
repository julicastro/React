import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoListContext } from "../Context/TodoListContext";

const TodoList = () => {
    const [todo, setTodo] = useState('');

    const { todos, addTodo, removeTodo } = useContext(TodoListContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);

    }


    return (
        <div style={{ background: theme.background, color: theme.text, textAlign: 'center' }} className='ui list'>
            {todos.length ? (
                todos.map((todo) => {
                    return <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className='item'> {todo.text}</p>

                })
            ) : (
                <div>You have no ToDos</div>
            )

            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo'>Add Todo </label>
                <input
                    type='text'
                    id='todo'
                    onChange={handleChange}
                />
                <input type='submit'
                    className='ui button primary'
                    value='Add new ToDo'

                />
            </form>
            <button className="ui button primary" onClick={changeTheme}>Change theme</button>
        </div>
    );
};

export default TodoList;