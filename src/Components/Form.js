import React from "react";
import "./Form.css";
import { AiFillPlusCircle } from "react-icons/ai";
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="mt-5 d-flex align-items-center">
        <input
          value={inputText}
          onChange={inputHandler}
          type="text"
          className="todo-input col-sm-6"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <AiFillPlusCircle style ={{fontSize : "2em"}}/>
        </button>
        <div className="select">
          <select
            onChange={statusHandler}
            name="todos"
            id="todos"
            className="filter-todo ml-5"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
