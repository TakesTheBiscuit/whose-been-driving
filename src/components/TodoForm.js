import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    when: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }
  function handleTaskDateChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, when: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Who"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <TextField
        label="When"
        type="text"
        name="task"
        value={todo.when}
        onChange={handleTaskDateChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;