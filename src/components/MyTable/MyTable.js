import "./MyTable.css";
import { Table } from "antd";

const MyTable = ({ columns, data }) => {
  return <Table className="table" columns={columns} dataSource={data} />;
};

export default MyTable;
