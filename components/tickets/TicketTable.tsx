import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServerType from "../../types/Resourcetype";

type Props = {
  children: JSX.Element[];
};

const TicketTable: React.FC<Props> = ({ children }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-white border-bottom border-solid border-b-2 border-zinc-800 font-bold">
          <td>Ticket Name</td>
          <td>Resource Name</td>
          <td>Assigned</td>
          <td>Latest Status</td>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

type TicketStatusType =
  | "Open"
  | "Awaiting Support"
  | "Awaiting Customer"
  | "Closed";

type ItemProps = {
  name: string;
  type: ServerType;
  assigned: string;
  currentStatus: TicketStatusType;
  url: string;
};

const TicketItem: React.FC<ItemProps> = ({
  name,
  type,
  assigned,
  currentStatus,
  url,
}) => {
  return (
    <tr className="text-gray-200 border-bottom border-solid border-b-2 border-zinc-800">
      <td className="hover:text-blue-500 hover:cursor-pointer select-none">
        <Link href={url}>{name}</Link>
      </td>
      <td className="hover:cursor-pointer select-none">{type}</td>
      <td className="hover:cursor-pointer">{assigned}</td>
      <td className="hover:cursor-pointer">{currentStatus}</td>
    </tr>
  );
};

export { TicketItem, TicketTable };
