import React from "react";
import { useNavigate, Link } from "react-router-dom";
const TodoItem = ({ todo, setTodos, todos, setEditTodo }) => {
  const navigate = useNavigate();

  const { id, title, isComplete } = todo;
  const onDeleteHandler = ({ id }) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onEditHandler = (todo) => setEditTodo(todo);
  return (
    <li
      className={`list-group-item ${isComplete && "list-group-item-success"}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={isComplete}></input>
          {title}
        </span>
        <div>
          <Link to={"/"}>
            <button
              className="btn btn-success mr-2"
              onClick={() => onEditHandler(todo)}
            >
              Edit
            </button>
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteHandler(todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
