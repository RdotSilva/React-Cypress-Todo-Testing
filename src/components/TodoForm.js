import React from "react";

const TodoForm = (props) => {
  return (
    <form>
      <input
        type="text"
        autoFocus
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoForm;
