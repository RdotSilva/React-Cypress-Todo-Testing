import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { saveTodo, loadTodos, destroyTodo, updateTodo } from "../lib/service";
import { filterTodos } from "../lib/utils";
import About from "./About";
import Welcome from "./Welcome";

const TodoApp = (props) => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const handleNewTodoChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  /**
   * Submit a todo, saving it to the local .json file database
   */
  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = { name: currentTodo, isComplete: false };

    saveTodo(newTodo)
      .then(({ data }) => setTodos([...todos, newTodo]), setCurrentTodo(""))
      .catch(() => {
        setError(true);
      });
  };

  /**
   * Delete a todo, removing it from the local .json file database
   */
  const handleDelete = (id) => {
    destroyTodo(id).then(() =>
      setTodos(todos.filter((todo) => todo.id !== id))
    );
  };

  /**
   * Toggle a todo complete/incomplete
   */
  const handleToggle = (id) => {
    const targetTodo = todos.find((todo) => todo.id === id);

    const updatedTodo = {
      ...targetTodo,
      isComplete: !targetTodo.isComplete,
    };

    updateTodo(updatedTodo).then(({ data }) => {
      const todos = todos.map((todo) => (todo.id === data.id ? data : todo));
      setTodos(todos);
    });
  };

  /**
   * Load todos from local .json file database
   */
  useEffect(() => {
    loadTodos()
      .then(({ data }) => setTodos([...data]))
      .catch(() => setError(true));
  }, []);

  const remainingTodos = todos.filter((todo) => !todo.isComplete).length;

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
          <Route path="/welcome" component={Welcome} />
          <Route path="about" render={About} />
          <Route
            path="/:filter?"
            render={({ match }) => (
              <TodoList
                todos={filterTodos(match.params.filter, todos)}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            )}
          />
        </section>
        <Footer remainingTodos={remainingTodos} />
      </div>
    </Router>
  );
};

export default TodoApp;
