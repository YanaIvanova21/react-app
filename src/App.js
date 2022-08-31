import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React" />
    </div>
  );
}

export default App; // to use this function outside current file
/*T is uppercase, not lowercase. Lowercase for a real HTML tags and uppercase for JS HTML tags like Todo */
