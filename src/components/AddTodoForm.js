import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddTodoForm = ({
  todos,
  setTodos,
  todo,
  setTodo,
  editTodo,
  setEditTodo,
}) => {
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    return setTodo({
      ...todo,
      [name]: value,
    });
  };
  const onUpdateTodo = (todo, editTodo) => {
    const edited = todos.map((tdo) => {
      return tdo === editTodo ? { ...todo } : tdo;
    });
    setTodos(edited);
    setEditTodo("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([{ id: new Date(), ...todo }, ...todos]);
      console.log(todos);
      setTodo({
        ...todo,
        title: "",
      });
    } else {
      onUpdateTodo(todo, editTodo);
      setTodo({
        ...todo,
        title: "",
      });
    }

    navigate("/todoList");
  };

  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo);
    } else {
      setEditTodo("");
    }
  }, [setEditTodo, editTodo]);

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        name="title"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={todo.title}
        onChange={onChangeHandler}
        required
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
