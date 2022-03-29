import logo from "./logo.svg";
import { CheckOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MyTable from "./components/MyTable/MyTable";

function App() {
  const editAndDelete = () => {
    return (
      <div>
        {" "}
        <EditOutlined />
        <DeleteOutlined />
      </div>
    );
  };

  const todosColummns = [
    {
      title: "شناسه",
      dataIndex: "row",
      key: "row",
    },
    {
      title: " شناسه کاربر",
      dataIndex: "row",
      key: "row",
    },
    {
      title: "عنوان",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "متن",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "عملیات",
      dataIndex: "completed",
      key: "completed",
      render: (completed) =>
        completed ? (
          <div>
            {" "}
            <EditOutlined />
            <DeleteOutlined />
          </div>
        ) : (
          <DeleteOutlined />
        ),
    },
  ];

  const todoData = [
    {
      row: "1",
      body: "این اولین عنوان است",
      text: "این اولین تکست است",
      completed: "",
    },
    {
      row: "2",
      body: "این دومین عنوان است",
      text: "این دومین تکست است",
      completed: "ی",
    },
    {
      row: "3",
      body: "این سومین عنوان است",
      text: "این سومین تکست است",
      completed: "",
      tags: ["شرکت 3"],
    },
    {
      row: "4",
      body: "این چهارمین عنوان است",
      text: "این چهارمین تکست است",
      completed: "ی",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Main />
      <MyTable
        columns={todosColummns}
        data={todoData}
        pagination={false}
        loading={false}
      />

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
