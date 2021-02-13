import React, { useEffect, useState } from "react";
import { Table } from "../prematives";
import { COLUMNS, DRAGGABLE } from "./colunms";

const AthleteTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://85.214.231.141:8000/api/v1/winners") // This can be moved to .env file
    .then(response => response.json())
    .then(result => setData(result.data))
  }, []);

  return (
    <div>
      <Table data={data} columns={COLUMNS} draggableColumns={DRAGGABLE} />
    </div>
  );
};

export default AthleteTable;
