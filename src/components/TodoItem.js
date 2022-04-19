import React from "react";

const TodoItem = ({ todo, setTodos, todos }) => {
  const { id, title, isComplete } = todo;
  const onDeleteHandler = ({ id }) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onEditHandler = () => {
    console.log(todo);
  };
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
          <button className="btn btn-success mr-2" onClick={onEditHandler}>
            Edit
          </button>
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
