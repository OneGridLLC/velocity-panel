import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const DOMAIN = "skribe.dev";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-zinc-900 h-[100vh] overflow-auto">
      <Head>
        <meta property="og:title" content="Velocity Hosting" />
        <meta
          property="og:description"
          content="Digitalocean level experience, on a lowendtalk level budget!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vlcty.host" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      <div className="lg:w-3/6 p-[3vw]">
        <h1 className="text-[16vw] lg:text-[4vw] mb-0">
          <span className="font-bold text-white text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
            Velocity Host
          </span>
        </h1>
        <p className="text-[4vw] lg:text-[1vw] pl-7 text-white font-bold">
          the developers hosting provider
        </p>
        <div className="mt-12"></div>
        <p className="text-sm lg:text-xl text-white mt-6">
          Velocity is a modern approach to hosting, with developer centric tools
          and ecosystems we allow for you to spend your time building things,
          after all, thats why your here isnt it?
        </p>
        <div className="mt-4"></div>
        <ul className="text-gray-400 text-sm lg:text-xl list-disc list-inside mt-8">
          <li className="list-none text-2xl mb-2 font-bold">
            Some of our products...
          </li>
          <li>Serverless Functions </li>
          <li>Virtual Machines</li>
          <li>Container Apps</li>
          <li>Bare Metal Compute</li>
          <li>Managed Databases</li>
          <li className="list-none mt-4">
            Want something else?{" "}
            <a
              href="https://airtable.com/shrlUNfJ21pZ4HDw7"
              className="font-bold text-blue-500"
            >
              Let us know!
            </a>
          </li>
        </ul>
        <div className="flex md:flex-row flex-col mt-[2vh] w-full justify-start gap-3">
          {/* <input className="px-3 py-1 mr-4 bg-zinc-800 text-white text-[16px] outline-none rounded-[8px] w-2/4" /> */}
          <button
            onClick={() => {
              window.location.href = "https://airtable.com/shrlUNfJ21pZ4HDw7";
            }}
            className="px-3 py-1 rounded-[8px] text-[20px] text-white font-semibold bg-gradient-to-br from-green-400 to-green-500 active:from-green-600 active:to-green-600"
          >
            Join the Waitlist
          </button>
          <button
            onClick={() => {
              window.location.href = "https://discord.gg/hmatHHW2e3";
            }}
            className="px-3 py-1 rounded-[8px] text-[20px] text-white font-semibold bg-gradient-to-br from-purple-400 to-purple-500 active:from-purple-600 active:to-purple-600"
          >
            Join the Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
