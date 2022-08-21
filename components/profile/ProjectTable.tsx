import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
type Props = {
  children: JSX.Element[] | JSX.Element;
};

const ProjectTable: React.FC<Props> = ({ children }) => {
  return (
    <table className="table-auto w-full">
      <tbody>{children}</tbody>
    </table>
  );
};

export default ProjectTable;
