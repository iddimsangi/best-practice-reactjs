import React, { useEffect } from "react";

const AddTodoForm = ({ todos, setTodos, todo, setTodo }) => {
  //   const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    return setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([{ id: new Date(), ...todo }, ...todos]);
    console.log(todos);
    setTodo({
      ...todo,
      title: "",
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

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
