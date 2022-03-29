import "./Main.scss";
import MyTable from "../MyTable/MyTable";
import MyModal from "../MyModal";
import { CloseOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";

import { useState } from "react";

const Main = () => {
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
          <div className="editdelete">
            {" "}
            <button className="editbutton">
              <EditOutlined onClick={() => setShowEdit(true)} />
            </button>
            {showEdit ? (
              <MyModal /*for EDIT*/
                isModalVisible={showEdit}
                handleOk={handleOkEdit}
                handleCancel={handleCancelEdit}
                title="ویرایش تسک"
                cancelText="انصراف"
                okText="ثبت"
              >
                <form>
                  <div>
                    نام کاربر :
                    <input
                      className="userArea"
                      type="text"
                      placeholder="نام کاربر"
                    />
                  </div>
                  <div>
                    عنوان :
                    <input
                      className="titleArea"
                      type="text"
                      placeholder="عنوان"
                    />
                  </div>
                  <br />
                  <div>
                    متن :
                    <textarea
                      className="textArea"
                      placeholder="متن خود را بنویسید ..."
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
      <div className="newTask">
        <button onClick={() => setShowAdd(true)} className="openmodal">
          ایجاد جدید +
        </button>
        {showAdd ? (
          <MyModal /*for ADD*/
            isModalVisible={showAdd}
            handleOk={handleOkAdd}
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
                />
              </div>
              <div>
                عنوان :
                <input className="titleArea" type="text" placeholder="عنوان" />
              </div>
              <br />
              <div>
                متن :
                <textarea
                  className="textArea"
                  placeholder="متن خود را بنویسید ..."
                ></textarea>
              </div>
            </form>
          </MyModal>
        ) : null}
      </div>
      <MyTable
        columns={todosColummns}
        data={todoData}
        pagination={false}
        loading={false}
      />
    </div>
  );
};

export default Main;
