import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [todo, setTodo] = useState({
    title: "",
    isComplete: false,
  });
  return (
    <BrowserRouter>
      <div className="container bg-white p-4 mt-5">
        <h1>My Todo List</h1>
        <Routes>
          <Route
            path="/"
            element={
              <AddTodoForm
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                setTodo={setTodo}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
            }
          />
          <Route
            path="/todoList"
            element={
              <TodoList
                todos={todos}
                setEditTodo={setEditTodo}
                setTodos={setTodos}
              />
            }
          />
          <Route>404 PAGE NOT FOUND</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
