import "./Main.css";

import MyModal from "../MyModal";
import { useState } from "react";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOk = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="main">
      <button onClick={() => setShowModal(true)} className="openmodal">
        باز کردن مودال
      </button>
      {showModal ? (
        <MyModal
          isModalVisible={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          title="این عنوان یک مودال ساده است"
          cancelText="بستن"
          okText="باشه"
          keyboard={true}
        >
          <div>این متن مودال است</div>
        </MyModal>
      ) : null}
    </div>
  );
};

export default Main;

// 3:54
