import React from "react";
import TodoItem from "./TodoItem";
import TotalCompleteItems from "./TotalCompleteItems";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
      ))}
      <TotalCompleteItems total={todos.length} />
    </ul>
  );
};

export default TodoList;
