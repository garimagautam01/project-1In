import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import '/src/App.css';

function TaskItem() {
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allTodos, setAllTodos] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [completedTodos, setCompletedTodos] = useState([]);
  
    // Function to add a new todo item
    const handleAddTodo = () => {
      const newTodoItem = {
        title: newTitle,
        description: newDescription
      };
  
      const updatedTodoArr = [...allTodos, newTodoItem];
      setAllTodos(updatedTodoArr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  
      // Clear input fields after adding todo
      setNewTitle('');
      setNewDescription('');
    };
  
    // Function to delete a completed todo item
    const handleDeleteCompletedTodo = (index) => {
      const updatedTodoArr = [...allTodos];
      updatedTodoArr.splice(index, 1);
  
      try {
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
        setAllTodos(updatedTodoArr);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    };
  
    // Function to mark a todo item as completed
    const handleComplete = (index) => {
      const completedItem = allTodos[index];
      const updatedCompletedArr = [...completedTodos, completedItem];
      setCompletedTodos(updatedCompletedArr);
  
      handleDeleteCompletedTodo(index); // Remove completed item from todos
  
      localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
    };
  
    // Function to delete a completed todo from completedTodos
    const handleDeleteCompletedTodos = (index) => {
      const reducedCompletedArr = [...completedTodos];
      reducedCompletedArr.splice(index, 1);
  
      try {
        localStorage.setItem('completedTodos', JSON.stringify(reducedCompletedArr));
        setCompletedTodos(reducedCompletedArr);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    };
  
    // Load todos from localStorage on component mount
    useEffect(() => {
      try {
        const savedTodoString = localStorage.getItem('todolist');
        const savedCompletedTodoString = localStorage.getItem('completedTodos');
        
        if (savedTodoString) {
          setAllTodos(JSON.parse(savedTodoString));
        }
        
        if (savedCompletedTodoString) {
          setCompletedTodos(JSON.parse(savedCompletedTodoString));
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }, []);
  
    return (
      <div className="App">
        <h1>MY TODOS</h1>
        <div className="todo-wrapper">
          <div className="todo-input">
            <div className='todo-input-item'>
              <label>Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder='Write Task Here...'
              />
            </div>
            <div className='todo-input-item'>
              <label>Description</label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder='Describe Your Task Here...'
              />
            </div>
            <div className='todo-input-item'>
              <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
            </div>
          </div>
  
          <div className='btn-area'>
            <button
              className={`secondaryBtn ${!isCompleteScreen && 'active'}`}
              onClick={() => setIsCompleteScreen(false)}
            >
              Todo
            </button>
            <button
              className={`secondaryBtn ${isCompleteScreen && 'active'}`}
              onClick={() => setIsCompleteScreen(true)}
            >
              Completed
            </button>
          </div>
  
          <div className='todo-list'>
            { !isCompleteScreen && allTodos.map((item, index) => (
              <div className='todo-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiOutlineDelete className='icon' onClick={() => handleDeleteCompletedTodo(index)} title="Delete?" />
                  <BsCheckLg className='check-icon' onClick={() => handleComplete(index)} title='Complete?' />
                </div>
              </div>
            ))}
            { isCompleteScreen && completedTodos.map((item, index) => (
              <div className='todo-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiOutlineDelete className='icon' onClick={() => handleDeleteCompletedTodos(index)} title="Delete?" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default TaskItem;
