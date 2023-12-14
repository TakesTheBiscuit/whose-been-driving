import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import "./App.css";
import TodoList from "../components/TodoList";
import DateList from "../components/dates/DateList";
import Home from "./Home";
import HeaderBar from "../components/HeaderBar";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // dates
  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageDates = JSON.parse(
      localStorage.getItem(`${LOCAL_STORAGE_KEY}-dates`)
    );
    if (storageDates) {
      setDates(storageDates);
    }
  }, []);

  useEffect(() => {
    // fires when dates array gets updated
    localStorage.setItem(`${LOCAL_STORAGE_KEY}-dates`, JSON.stringify(dates));
  }, [dates]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function addDate(dateI) {
    // adds new todo to beginning of todos array
    setDates([dateI, ...dates]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function removeDate(id) {
    setDates(dates.filter((dateI) => dateI.id !== id));
  }

  return (
   
    <>
  

      <Router>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dates" element={<DateList dates={dates} removeDate={removeDate} addDate={addDate} />} />
        </Routes>
      </Router>
      
      <hr />

      <TodoList
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    

    </>
  );
}

export default App;
