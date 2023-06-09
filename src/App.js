// import "./App.css";
// import InputForm from "./todoForm.js";
// import TodoList from "./todosByUser";
// import React from "react";
// import TodoUpdateDelete from "./todoUpdateDelete";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <InputForm />
//         <TodoList />
//         <TodoUpdateDelete />
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import InputForm from "./todoForm";
import TodoList from "./todosByUser";
import TodoUpdateDelete from "./todoUpdateDelete";

function App() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Todo Application</h2>
        </div>
        <div className="card-body">
          <div className="form-fields">
            <InputForm />
            <TodoList />
          </div>
          <div className="btn-wrapper">
            <TodoUpdateDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
