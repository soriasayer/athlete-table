import React from "react";
import ReactTable from "react-table";
//@ts-ignore
import withDraggableColumns from "react-table-hoc-draggable-columns";
import "react-table-hoc-draggable-columns/dist/styles.css";
import "react-table/react-table.css";
import "./style.scss";

const ReactTableDraggableColumns = withDraggableColumns(ReactTable);

const Table = ({data, columns, draggableColumns}: any) => {
  return (
    <div className="table-container">
      <ReactTableDraggableColumns
        className="draggable-table"
        columns={columns}
        data={data}
        filterable
        showPagination={true}
        draggableColumns={{
          mode: "reorder",
          draggable: draggableColumns,
          enableColumnWideDrag: false,
        }}
      />
    </div>
  );
};

export default Table;
