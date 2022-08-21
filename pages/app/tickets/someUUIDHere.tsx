import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ActionItem from "../../../components/homepage/ActionItem";
import Navbar from "../../../components/Navbar";
import {
  TicketTable,
  TicketItem,
} from "../../../components/tickets/TicketTable";

const TicketHome: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-row">
        <div className="w-1/3 flex flex-row justify-center mt-12">
          <div className="w-1/3 bg-zinc-700 p-4 rounded-2xl">
            <h1 className="text-white text-2xl">Ticket Information</h1>
            <div className="px-4">
              <h1 className="text-gray-200 text-lg font-semibold">
                Cannot access server
              </h1>
              <div className="h-6" />
              <h1 className="text-white flex">
                Assigned:{" "}
                <span className="text-blue-500 font-bold ml-auto">
                  Gavin Endsley
                </span>
              </h1>
              <h1 className="text-white flex">
                Status:{" "}
                <span className="text-red-500 font-bold ml-auto">Open</span>
              </h1>
              <h1 className="text-white flex">
                Service:{" "}
                <span className="text-white font-bold ml-auto">
                  Virtual Machine
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full"></div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default TicketHome;
