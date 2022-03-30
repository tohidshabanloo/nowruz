import { useState } from "react";
import "./AddTodo.scss";
import { v4 as uuid } from "uuid";

const AddTodo = ({ todoList, setTodoList }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.length) return; /*اگه اینپوت خالی بود همینجا وایستا!*/
    const newTodo = { id: uuid(), text: inputValue, completed: false };
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
    setInputValue("");
  };

  return (
    <div className="add-todo">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="تسک جدید بنویسید ..."
      ></input>
      <button onClick={addTodo}> + </button>
    </div>
  );
};

export default AddTodo;
