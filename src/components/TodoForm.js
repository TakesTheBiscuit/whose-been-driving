import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import 'date-fns';

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
      setTodo({ ...todo, task: "", when: ""});
      // refocus the who box for continued input (smashing enter ) - no mouse needed
      document.getElementById('whoField').focus();
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
        id="whoField"
        style={{width:'35%'}}
      />
      <TextField
        label="When"
        name="task"
        value={todo.when}
        onChange={handleTaskDateChange}
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
        style={{width:'35%'}}

      />
      <div>
        <Button type="submit" variant="outlined" color="primary" style={{padding:0, marginLeft: 10}}>ADD</Button>
      </div>
    </form>
  );
}

export default TodoForm;