import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

const TodoApp = (props) => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoForm
            currentTodo={currentTodo}
            handleNewTodoChange={handleNewTodoChange}
          />
        </header>
        <section className="main">
          <TodoList todos={todos} />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default TodoApp;
