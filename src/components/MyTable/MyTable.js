import "./MyTable.css";
import { Table } from "antd";

const MyTable = ({ columns, data, pagination }) => {
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      pagination={pagination}
    />
  );
};

export default MyTable;
