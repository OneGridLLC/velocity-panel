import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ActionItem from "../../components/homepage/ActionItem";
import Navbar from "../../components/Navbar";
import { TicketTable, TicketItem } from "../../components/tickets/TicketTable";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-full w-2/3 p-16">
          <h1 className="text-white text-3xl">Your Tickets</h1>
          <div className="p-6 ">
            <TicketTable>
              <TicketItem
                name="Cannot access server"
                type="Virtual Machine"
                assigned="Owen Rummage"
                currentStatus="Closed"
                url="/app/tickets/someUUIDHere"
              />
              <TicketItem
                name="DNS not updating"
                type="DNS Zone"
                assigned="Gavin Endlsey"
                currentStatus="Awaiting Customer"
                url="/app/tickets/someUUIDHere"
              />
              <TicketItem
                name="Web app not deploying"
                type="Static Web Application"
                assigned="Ronald Ewing"
                currentStatus="Closed"
                url="/app/tickets/someUUIDHere"
              />
            </TicketTable>
          </div>
        </div>
        <div className="h-full w-1/3 p-16 flex flex-col gap-6">
          <h1 className="text-white text-3xl">Status Updates</h1>
          <div className="flex flex-col gap-4 px-2">
            <ActionItem
              name="Rapid Planned Assembly"
              author="Owen Rummage"
              description="Server Unexploded"
            />
            <ActionItem
              name="Rapid Unplanned Disassembly"
              author="Owen Rummage"
              description="Server Exploded"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10   bg-zinc-800 flex flex-row justify-center items-center gap-12 font-semibold text-zinc-300">
        <Link href="">Service Status</Link>
        <Link href="">Open a Ticket</Link>
      </div>
    </div>
  );
};

export default Home;
