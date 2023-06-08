import React, { useState } from "react";

const TodoUpdateDelete = () => {
  const [userId, setUserId] = useState("");
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");

  const handleUpdate = async () => {
    console.log(`Updating todo item with ID ${userId}...`);
    console.log({ todo, category, user });

    try {
      const response = await fetch(`http://localhost:4567/todo/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo, category, user }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4567/todo/${userId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update or delete Todo by user ID</h2>
      <div>
        <label>User ID:</label>
        <input type="text" onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Todo:</label>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>User:</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </div>
      <div>
        <button onClick={handleUpdate}>Update Todo</button>
        <button onClick={handleDelete}>Delete Todo</button>
      </div>
    </div>
  );
};

export default TodoUpdateDelete;
