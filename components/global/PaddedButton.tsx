import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

type Props = {
  className?: string
  children?: JSX.Element[] | JSX.Element | string
};

const PaddedButton: React.FC<Props> = ({ children, className }) => {
  return (
    <button className={"text-lg font-semibold p-1.5 px-5 rounded-xl " + className}>
      {children}
    </button>
  );
};

export default PaddedButton;
