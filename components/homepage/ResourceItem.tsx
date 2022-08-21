import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServerType from "../../types/Resourcetype";

type Props = {
  name: string;
  type: ServerType;
  ip: string;
  url: string;
};

const ResourceItem: React.FC<Props> = ({ name, type, ip, url }) => {
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

export default ResourceItem;
