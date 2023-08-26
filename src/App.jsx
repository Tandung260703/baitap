import './App.css';
import Nav from './components/Nav/Nav';
import { Fragment, useState } from 'react';
import Checkbox from './components/Checkbox/Checkbox';
import { v4 as uuidv4 } from 'uuid';

const initialValues = [
  {
    id: uuidv4(),
    name: 'Home Work',
    isSuccess: true,
  },
  {
    id: uuidv4(),
    name: 'Swim',
    isSuccess: false,
  },
  {
    id: uuidv4(),
    name: 'Run',
    isSuccess: true,
  },
];

function App() {
  const [navNumber, setNavNumber] = useState(1);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(initialValues);

  const handleAddTodo = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        isSuccess: false,
        name: todo,
      },
    ]);
  };

  const handleUpdateTodo = (todoId) => {
    setTodoList((prev) => prev.map((todo) => (todo.id === todoId ? { ...todo, isSuccess: !todo.isSuccess } : todo)));
  };

  const handleDeleteTodo = (todoId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const handleDeleteAllSuccessTodos = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.isSuccess));
  };

  return (
    <div className="app">
      <div className="wrapper-app">
        <h1 className="title">#Todo</h1>
        <Nav setNavNumber={setNavNumber} navNumber={navNumber}></Nav>
        {navNumber === 1 ? (
          <>
            <div className="wrapper-input">
              <input
                type="text"
                className="input"
                placeholder="add Details"
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
              <button className="btn-add" onClick={handleAddTodo}>
                Add
              </button>
            </div>
            <div className="todo-list">
              {todoList.map((item, index) => {
                return (
                  <Checkbox
                    key={index}
                    todoName={item.name}
                    isSuccess={item.isSuccess}
                    onChange={() => handleUpdateTodo(item.id)}
                  ></Checkbox>
                );
              })}
            </div>
          </>
        ) : navNumber === 2 ? (
          <>
            <div className="wrapper-input">
              <input
                type="text"
                className="input"
                placeholder="add Details"
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
              <button className="btn-add" onClick={handleAddTodo}>
                Add
              </button>
            </div>
            <div className="todo-list">
              {todoList.map((item, index) => {
                if (item.isSuccess) {
                  return <Checkbox key={index} todoName={item.name} isSuccess={item.isSuccess}></Checkbox>;
                } else {
                  return <Fragment key={index}></Fragment>;
                }
              })}
            </div>
          </>
        ) : (
          <div className="todo-list">
            {todoList.map((item, index) => {
              if (item.isSuccess) {
                return (
                  <div key={index} className="remove-todo">
                    <Checkbox todoName={item.name} isSuccess={item.isSuccess}></Checkbox>
                    <button onClick={() => handleDeleteTodo(item.id)}>&times;</button>
                  </div>
                );
              } else {
                return <Fragment key={index}></Fragment>;
              }
            })}
            <div>
              <button className="btn-del-all" onClick={handleDeleteAllSuccessTodos}>
                Xoa all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
