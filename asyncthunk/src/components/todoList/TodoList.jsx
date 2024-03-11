import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, deleteTodo } from "../../store/slices/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { items = [], status, error } = useSelector((state) => state.todos);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          className="flex-grow px-4 py-2 mr-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter todo text"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Todo
        </button>
      </div>
      {status === "loading" ? (
        <>Loading...</>
      ) : (
        <ul>
          {items?.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-2 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
