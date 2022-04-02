import "./MyModal.css";
import { Modal } from "antd";

const MyModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
  title,
  cancelText,
  okText,
  keyboard,
  onOk
}) => {
  return (
    <Modal
      className="modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      title={title}
      cancelText={cancelText}
      okText={okText}
      keyboard={keyboard}
      
    >
      {children}
    </Modal>
  );
};

export default MyModal;
