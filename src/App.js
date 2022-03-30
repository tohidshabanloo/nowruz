import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import MyTable from "./components/MyTable/MyTable";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <AddTodo todoList={todoList} setTodoList={setTodoList} /> */}
      {/* <TodoList todoList={todoList} setTodoList={setTodoList} /> */}
      <Footer />
      {/* 3:54 */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>در حال راه اندازی</p>
        توسط
        <a
          className="App-link"
          href="https://www.tohidsh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          توحید شعبانلو
        </a>
      </header> */}
    </div>
  );
}

export default App;
