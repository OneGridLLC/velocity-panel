import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

type Props = {
  className?: string
  children?: JSX.Element[] | JSX.Element | string
};

const TextButton: React.FC<Props> = ({ children, className }) => {
  return (
    <h1 className={"text-md hover:cursor-pointer select-none " + className}>
      {children}
    </h1>
  );
};

export default TextButton;
