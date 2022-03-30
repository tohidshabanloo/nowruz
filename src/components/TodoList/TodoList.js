import "./TodoList.scss";

const TodoList = ({ todoList, setTodoList }) => {
  const handleCompelete = (id) => {
    const updatedTodos = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodos);
  };
  return (
    <div className="todosList ">
      {todoList.map((item, i) => (
        <div key={item.id} className="todo">
          <span className="removeIcon" onClick={() => removeTodo(item.id)}>
            X
          </span>
          <span
            className="todospan"
            style={{ textDecoration: item.completed ? "line-through" : "" }}
          >
            {i + 1} .{item.text}
          </span>
          <button
            onClick={() => handleCompelete(item.id)}
            style={{
              backgroundColor: item.completed ? "yellow" : "red",
              color: item.completed ? "black" : "white",
            }}
          >
            {item.completed ? "انجام نشده" : "انجام شده"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
