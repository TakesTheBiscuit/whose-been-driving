import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList({ todos, addTodo,removeTodo, toggleComplete }) {
  return (
    <>
    <TodoForm addTodo={addTodo} />

    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
    </>
  );
}

export default TodoList;