import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add Item");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo ..."
          value={title}
          onChange={handleChange}
        />
        <button type="button">Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;
