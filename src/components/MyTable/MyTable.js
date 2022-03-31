import "./MyTable.scss";
import { Table } from "antd";

const MyTable = ({ columns, data, pagination, loading, showHeader, size }) => {
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      showHeader={showHeader}
      size={size}
    />
  );
};

export default MyTable;
