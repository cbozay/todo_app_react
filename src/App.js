import React, { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") {
      alert("todoText cant be empty");
      return;
    }
    console.log(todoText);
  };
  return (
    <div className="container">
      <h1 className="text-center m-5">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            type="text"
            className="form-control"
            placeholder="Type your Todo"
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
          />
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
