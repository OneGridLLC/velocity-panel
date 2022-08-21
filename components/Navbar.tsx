import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <div className="flex flex-row w-screen h-16 bg-blue-500 items-center px-6 gap-12">
      <Link href="/app">
        <img
          src="https://cdn.discordapp.com/attachments/969830862709477386/1010454624538480721/Velocity.png"
          className="h-10 w-10 hover:animate-spin"
        />
      </Link>
      <div className="flex flex-row gap-4 text-white font-bold">
        {/* 
            <h3>Home</h3>
            <h3>Home</h3> 
        */}
      </div>
      <input
        type={"text"}
        placeholder="Search for Items"
        className="rounded-2xl p-2 px-4 w-1/3 ml-auto mr-auto bg-blue-400 text-white outline-white placeholder-white"
      />
      <Link href="/app/profile">
        <img
          src="https://media.discordapp.net/attachments/885540138241908756/1010447244660592740/c0d3_1.png"
          className="rounded-full h-10 w-10"
        />
      </Link>
    </div>
  );
};

export default Navbar;
