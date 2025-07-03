import {useState} from 'react';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './TodoApp.css';


const TodoApp = () => {

      const [task, setTask] = useState('')

      const [todos, setTodos] = useState([])

      const handleTask = (e) => {
            e.preventDefault();

            if(!task.trim()) return;

            const newTodo = {
                  id: Date.now(),
                  text: task,
                  completed: false
            }

            setTodos([newTodo, ...todos])
            setTask('')
      }

      const toggleComplete = (id) => {
            setTodos(todos.nap((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo ) )
      }

      const deleteTask = (id) => {
            setTodos(todos.filter((todo) => todo.id !==id))
      } 

        
  return (
    <div className='todo-container'>
        <h1>Productive To-Do List</h1>

        <form action="#" onSubmit={handleTask} className='todo-form'>
          <input type="text" placeholder='Add a new task...' value={task} onChange={(e) => setTask(e.target.value)}/>
          <button type='submit'>Add</button>
        </form>

        <ul className="todo-list">
            {todos.map((todo) =>(
                 <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                     <span onClick={()=> toggleComplete(todo.id)}>{todo.text}</span>
                     <button> onClick={()=> deleteTask(todo.id)}<RiDeleteBin6Line/></button>
                 </li> 

            ))}
        </ul>
    </div>
  )
}

export default TodoApp