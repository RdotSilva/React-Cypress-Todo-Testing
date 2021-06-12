import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { saveTodo, loadTodos } from "../lib/service";

const TodoApp = (props) => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const handleNewTodoChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = { name: currentTodo, isCompleted: false };

    saveTodo(newTodo)
      .then(({ data }) => setTodos([...todos, newTodo]), setCurrentTodo(""))
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    loadTodos()
      .then(({ data }) => setTodos([...data]))
      .catch(() => setError(true));
  }, []);

  return (
    <Router>
      <div>
        <header className="header">
          <h1>todos</h1>
          {error ? <span className="error">ERROR</span> : null}
          <TodoForm
            currentTodo={currentTodo}
            handleNewTodoChange={handleNewTodoChange}
            handleTodoSubmit={handleTodoSubmit}
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
