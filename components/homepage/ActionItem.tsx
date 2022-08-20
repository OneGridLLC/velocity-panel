import React from "react";
import ServerType from "../../types/Resourcetype";

type Props = {
  name: string;
  author: string;
  description: string;
};

const ActionItem: React.FC<Props> = ({ name, author, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end">
        <h1 className="text-xl text-white mr-auto">{name}</h1>
        {/* <h3 className="text-zinc-400 font-bold ml-auto">{author}</h3> */}
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default ActionItem;
