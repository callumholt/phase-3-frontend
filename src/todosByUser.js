import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:4567/todo/${user}`);
    const data = await response.json();
    setTodos(data);
  };

  return (
    <div>
      <h2>Please enter in user ID below in order to retrieve saved todo's</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </label>
        <input type="submit" value="Get Todos" />
      </form>
      <ul>
        {todos.map((todo) => (
          <ul key={todo.id}>
            {todo.id} - {todo.todo} - {todo.category}
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
