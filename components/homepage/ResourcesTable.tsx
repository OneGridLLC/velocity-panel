import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
type Props = {
  children: JSX.Element[];
};

const ResourcesTable: React.FC<Props> = ({ children }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-white border-bottom border-solid border-b-2 border-zinc-800 font-bold">
          <td>Name</td>
          <td>Type</td>
          <td>Location</td>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default ResourcesTable;
