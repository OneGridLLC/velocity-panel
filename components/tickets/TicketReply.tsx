import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import moment from "moment";

type Props = {
  avatar: string
  name: string
  email: string
  body: string
  date: Date
  children?: JSX.Element[] | JSX.Element
};

const TicketReply: React.FC<Props> = ({ children, name, email, avatar, body, date }) => {
  return (
    <div className="bg-zinc-800 w-fullrounded-2xl">
      <div className="w-full flex flex-row p-4 rounded-2xl">
        <img
          src="https://pbs.twimg.com/profile_images/1523887399507415040/4wrMCQ8i_400x400.jpg"
          className="rounded-full h-14 w-14"
        />
        <div className="text-white ml-4">
          <h1 className="text-2xl">{name}</h1>
          <h1 className="font-semibold">{email}</h1>
          <p className="pt-6 text-white">
            {body}
          </p>
        </div>
        <h1 className="text-lg text-white ml-auto">
          {moment(date).format('MM/DD/YYYY') + " "}
          <span className="text-md font-bold text-zinc-600">
            ({moment(date).format('HH:mm')})
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TicketReply;
