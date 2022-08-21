import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServerType from "../../types/Resourcetype";

type Props = {
  children: JSX.Element[];
};

const ResourceTable: React.FC<Props> = ({ children }) => {
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

type ItemProps = {
  name: string;
  type: ServerType;
  ip: string;
  url: string;
};

const ResourceItem: React.FC<ItemProps> = ({ name, type, ip, url }) => {
  return (
    <tr className="text-gray-200 border-bottom border-solid border-b-2 border-zinc-800">
      <td className="hover:text-blue-500 hover:cursor-pointer select-none">
        <Link href={url}>{name}</Link>
      </td>
      <td className="hover:cursor-pointer select-none">{type}</td>
      <td className="hover:cursor-pointer">
        <Link href={`https://${ip}`}>{ip}</Link>
      </td>
    </tr>
  );
};

export { ResourceItem, ResourceTable };
