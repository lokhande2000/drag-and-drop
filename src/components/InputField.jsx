import React, { useRef } from "react";
import "./styles.css";

const InputField = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef(null);

  // Update the state with the new value of the input field
  const handleChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value
    });
  };

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={todo.title}
        ref={inputRef}
        onChange={handleChange}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
