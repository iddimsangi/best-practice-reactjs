import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddTodoForm />} />
          <Route path="/todoList" element={<TodoList />} />
          {/* <Route path="/TotalCompleteItems" element={<TotalCompleteItems />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
