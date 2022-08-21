import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ServerType from "../../types/Resourcetype";

type Props = {
  name: string;
  owner: string;
  url: string;
};

const ProjectTableItem: React.FC<Props> = ({ name, owner, url }) => {
  return (
    <div className="p-2 px-4 text-white text-xl bg-zinc-800 rounded-2xl">
      <h1 className="">OneGrid LLC</h1>
    </div>
  );
};

export default ProjectTableItem;
