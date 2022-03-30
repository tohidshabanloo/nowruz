import "./Main.scss";
import { v4 as uuid } from "uuid";
import { useState } from "react";

import MyTable from "../MyTable/MyTable";
import MyModal from "../MyModal";
import { CloseOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";

const Main = () => {
  const [todoList, setTodoList] = useState("");

  const removeTodo = (id) => {
    const updatedTodos = addTodoUTT.filter((item) => item.id !== id);
    setTodoList(updatedTodos);
  };

  // FOR USER
  const [inputValueUser, setInputValueUser] = useState("");
  const [todoListUser, setTodoListUser] = useState([]);
  // FOR TEXT
  const [inputValueText, setInputValueText] = useState("");
  const [todoListText, setTodoListText] = useState([]);
  // FOR TITLE
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [todoListTitle, setTodoListTitle] = useState([]);

  // FOR TEXT
  const addTodoUTT = () => {
    if (
      !inputValueUser.length ||
      !inputValueTitle.length ||
      !inputValueText.length
    )
      return; /*اگه اینپوت خالی بود همینجا وایستا!*/
    const newTodo = {
      id: uuid(),
      user: inputValueUser,
      title: inputValueTitle,
      text: inputValueText,
      completed: true,
    };
    const updatedTodoList = [...todoListText, newTodo];

    setTodoListUser(updatedTodoList);
    setInputValueUser("");
    setTodoListTitle(updatedTodoList);
    setInputValueTitle("");
    setTodoListText(updatedTodoList);
    setInputValueText("");
  };

  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleOkAdd = () => {
    setShowAdd(false);
  };
  const handleCancelAdd = () => {
    setShowAdd(false);
  };
  const handleOkEdit = () => {
    setShowEdit(false);
  };
  const handleCancelEdit = () => {
    setShowEdit(false);
  };
  const handleOkDelete = () => {
    setShowDelete(false);
  };
  const handleCancelDelete = () => {
    setShowDelete(false);
  };

  const todosColummns = [
    {
      title: "شناسه (UUID)",
      dataIndex: "id",
      key: "id",
    },
    {
      title: " شناسه کاربر",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
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
          <div className="editdelete">
            {" "}
            <button className="editbutton">
              <EditOutlined onClick={() => setShowEdit(true)} />
            </button>
            {showEdit ? (
              <MyModal /*for EDIT*/
                isModalVisible={showEdit}
                handleOk={addTodoUTT}
                handleCancel={handleCancelEdit}
                title="ویرایش تسک"
                cancelText="انصراف"
                okText="ثبت"
                keyboard={true}
              >
                <form>
                  <div>
                    نام کاربر :
                    <input
                      className="userArea"
                      type="text"
                      placeholder="نام کاربر"
                      value={inputValueUser}
                      onChange={(e) => setInputValueUser(e.target.value)}
                    />
                  </div>
                  <div>
                    عنوان :
                    <input
                      className="titleArea"
                      type="text"
                      placeholder="عنوان"
                      value={inputValueTitle}
                      onChange={(e) => setInputValueTitle(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    متن :
                    <textarea
                      value={inputValueText}
                      onChange={(e) => setInputValueText(e.target.value)}
                      type="text"
                      placeholder="تسک جدید بنویسید ..."
                      className="textArea"
                    ></textarea>
                  </div>
                </form>
              </MyModal>
            ) : null}
            {showDelete ? (
              <MyModal /*for DELETE*/
                isModalVisible={showDelete}
                handleOk={handleOkDelete}
                handleCancel={handleCancelDelete}
                title="حذف تسک"
                cancelText="خیر"
                okText="بله"
              >
                <div>آیا مطمعن هستید که میخواهید این تسک را حذف کنید؟</div>
              </MyModal>
            ) : null}
            <button
              className="deletebutton"
              onClick={() => setShowDelete(true)}
            >
              <DeleteOutlined />
            </button>
          </div>
        ) : (
          <div className="takmilnist">
            <CloseOutlined /> تکمیل نیست
          </div>
        ),
    },
  ];

  return (
    <div className="App">
      <div className="newTask">
        <button onClick={() => setShowAdd(true)} className="openmodal">
          ایجاد جدید +
        </button>
        {showAdd ? (
          <MyModal /*for ADD*/
            isModalVisible={showAdd}
            handleOk={addTodoUTT}
            handleCancel={handleCancelAdd}
            title="ایجاد تسک جدید"
            cancelText="انصراف"
            okText="ثبت"
            keyboard={true}
          >
            <form>
              <div>
                نام کاربر :
                <input
                  className="userArea"
                  type="text"
                  placeholder="نام کاربر"
                  value={inputValueUser}
                  onChange={(e) => setInputValueUser(e.target.value)}
                />
              </div>
              <div>
                عنوان :
                <input
                  className="titleArea"
                  type="text"
                  placeholder="عنوان"
                  value={inputValueTitle}
                  onChange={(e) => setInputValueTitle(e.target.value)}
                />
              </div>
              <br />
              <div>
                متن :
                <textarea
                  value={inputValueText}
                  onChange={(e) => setInputValueText(e.target.value)}
                  type="text"
                  placeholder="تسک جدید بنویسید ..."
                  className="textArea"
                ></textarea>
              </div>
            </form>
          </MyModal>
        ) : null}
      </div>
      <MyTable
        columns={todosColummns}
        data={todoListUser}
        pagination={false}
        loading={false}
      />
    </div>
  );
};

export default Main;
