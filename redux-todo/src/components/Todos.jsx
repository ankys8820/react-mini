import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice.js";

const Todos = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  var prev = 0;
  return (
    <>
      <div>
        <h2>MY TODOS</h2>
        <table>
          <thead>
            <tr>
              <th>Sl NO.</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => (
              <>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.text}</td>
                  <td>
                    <button onClick={() => dispatch(removeTodo(item.id))}>
                      Remove
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todos;
