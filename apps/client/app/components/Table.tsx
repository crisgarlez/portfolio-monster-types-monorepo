import React from "react";

const Table = ({ data }: { data: any[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>code</th>
          <th>name</th>
          <th>key</th>
          <th>incubation_time</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.key}</td>
              <td>{item.incubation_time}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
