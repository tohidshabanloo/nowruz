import logo from "./logo.svg";
import { CheckOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MyTable from "./components/MyTable/MyTable";

function App() {
  const todosColummns = [
    {
      title: "ردیف",
      dataIndex: "row",
      key: "row",
    },
    {
      title: "متن",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "وضعیت",
      dataIndex: "completed",
      key: "completed",
      render: (completed) =>
        completed ? <CheckOutlined /> : <CloseOutlined />,
    },
  ];
  const todoData = [
    {
      row: "1",
      text: "این اولین تکست است",
      completed: "",
    },
    {
      row: "2",
      text: "این دومین تکست است",
      completed: "ی",
    },
    {
      row: "3",
      text: "این سومین تکست است",
      completed: "",
    },
    {
      row: "4",
      text: "این چهارمین تکست است",
      completed: "ی",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Main />
      <MyTable columns={todosColummns} data={todoData} pagination={false} />
      <Footer />

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
