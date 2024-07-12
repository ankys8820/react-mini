import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
    alert("Sucessfully added a task!");
  };

  // console.log(input);
  return (
    <>
      <div>
        <h3>Todo Add</h3>
        <form onSubmit={handleClick}>
          <input
            type="text"
            className=""
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter you todo"
          />
          <button>Add Todo</button>
        </form>
      </div>
      <Todos></Todos>
    </>
  );
}

export default App;
