import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import "./Todo.css"
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todos">
      <li style = {{color : "white"}} className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="check">
        <AiFillCheckCircle style ={{fontSize :"2.1em", color :"green"}} />
      </button>
      <button onClick={deleteHandler} className="delete">
        <FaTrash  style ={{fontSize :"1.9em", color :"red"}}/>
      </button>
    </div>
  );
};

export default Todo;
