import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState([]);
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
              />
            }
          />
          <Route
            path="/todoList"
            element={<TodoList todos={todos} setTodos={setTodos} />}
          />
          <Route>404 PAGE NOT FOUND</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
