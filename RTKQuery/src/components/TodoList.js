import React, { useEffect } from "react";
import { useState } from "react";
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from "../store/api/apiSlice";
import "./TodoList.css";
const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo]=useDeleteTodoMutation()
  const { data, error, isLoading,isFetching } = useGetTodosQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({id:String(Math.floor(Math.random()*10)+1000),title: newTodo });
    //addTodo
    setNewTodo("");
  };

  console.log(data);
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="formgroup">
          <input
            type="text"
            id="new-todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
          />
          <button className="submit">Add Task</button>
        </div>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : data.length>0 && (
        <div className="todolist">
          {data?.map((todo, index) => {
            return (
              <div className="todoitem">
                <p>
                  {" "}
                  {index + 1}. {todo.title}
                </p>
                <div>
                  <button onClick={()=>deleteTodo({id:todo.id})}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>)}
      
    </div>
  );
};

export default TodoList;
