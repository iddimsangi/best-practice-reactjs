import React from "react";

const TodoItem = ({ id, title, isComplete }) => {
  return (
    <li
      className={`list-group-item ${isComplete && "list-group-item-success"}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={isComplete}></input>
          {title}
        </span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
