import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

type Props = {
  avatar: string
  name: string
  email: string
  children?: JSX.Element[] | JSX.Element
};

const UserCard: React.FC<Props> = ({ children, name, email, avatar }) => {
  return (
    <div className="flex flex-row gap-6">
      <img
        src={avatar}
        className="rounded-full h-16 w-16"
      />
      <div>
        <h1 className="text-white text-3xl">{name}</h1>
        <h2 className="text-zinc-400 text-md">{email}</h2>
      </div>
    </div>
  );
};

export default UserCard;
