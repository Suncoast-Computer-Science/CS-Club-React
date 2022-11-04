import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter todo"
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default FormTodo;
