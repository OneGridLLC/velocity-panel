import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ActionItem from "../../components/homepage/ActionItem";
import ResourceItem from "../../components/homepage/ResourceItem";
import ResourcesTable from "../../components/homepage/ResourcesTable";
import Navbar from "../../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-full w-2/3 p-16">
          <div className="flex flex-row">
            <div>
              <h1 className="text-white text-3xl">Rummage Test VM</h1>
              <h2 className="text-zinc-400 text-md">Virtual Machine</h2>
            </div>
            <div className="ml-auto flex flex-row gap-6 items-end">
              <h1 className="text-green-300 text-md hover:cursor-pointer select-none">
                Start
              </h1>
              <h1 className="text-red-300 text-md hover:cursor-pointer select-none">
                Stop
              </h1>
              <h1 className="text-blue-300 text-md hover:cursor-pointer select-none">
                Console
              </h1>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3 p-16 flex flex-col gap-6">
          <h1 className="text-white text-3xl">Recent Actions</h1>
          <div className="flex flex-col gap-4 px-2">
            <ActionItem
              name="Update Server"
              author="Owen Rummage"
              description="Owen Rummage updated the IP Address of 'rummage-test'."
            />
            <ActionItem
              name="Create Serverless"
              author="Owen Rummage"
              description="Owen Rummage created 'velocity-auth'."
            />
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-row text-gray-500 justify-center absolute bottom-3">
        <h1>Design by Lea Gray - Implemented by Owen Rummage</h1>
      </div>
    </div>
  );
};

export default Home;
