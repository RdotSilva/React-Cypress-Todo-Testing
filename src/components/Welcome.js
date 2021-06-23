const Welcome = (props) => {
  return (
    <div data-testid="welcome-container">
      <h1 data-testid="welcome-header">Welcome to Todo App</h1>
      <button class="welcome-button">Click Me</button>
    </div>
  );
};

export default Welcome;
