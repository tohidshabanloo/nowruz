import "./MyTable.css";
import { Table } from "antd";

const MyTable = ({ columns, data, pagination, loading }) => {
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      pagination={pagination}
      loading={loading}
    />
  );
};

export default MyTable;
