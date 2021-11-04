import React from "react";
import Todo from "../Components/Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div
      style={{ border: "2px solid black", marginTop: "20px" }}
      className="todo-container d-flex justify-content-center"
    >
      <ul className="todo-list">
        {filteredTodos.map((todo, id) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
