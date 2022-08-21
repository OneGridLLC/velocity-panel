import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ActionItem from "../../components/homepage/ActionItem";
import Navbar from "../../components/Navbar";
import {
  ResourceItem,
  ResourceTable,
} from "../../components/homepage/ResourceTable";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-full w-2/3 p-16">
          <h1 className="text-white text-3xl">Resources</h1>
          <div className="p-6 ">
            <ResourceTable>
              <ResourceItem
                name="rummage-test"
                type="Virtual Machine"
                ip="192.168.0.2"
                url="/app/servers/someUUIDHere"
              />
              <ResourceItem
                name="vlctyhost-panel"
                type="Static Web Application"
                ip="https://panel.vlcty.host"
                url="/app/servers/someUUIDHere"
              />
              <ResourceItem
                name="velocity-auth"
                type="Serverless Function"
                ip="https://api.panel.vlcty.host/auth"
                url="/app/servers/someUUIDHere"
              />
              <ResourceItem
                name="vlcty.host"
                type="DNS Zone"
                ip="vlcty.host"
                url="/app/servers/someUUIDHere"
              />
              <ResourceItem
                name="vlcty-dev-cluster"
                type="Kubernetes Cluster"
                ip="kube.dev.infra.vlcty.host"
                url="/app/servers/someUUIDHere"
              />
            </ResourceTable>
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
      <div className="absolute inset-x-0 bottom-0 h-10   bg-zinc-800 flex flex-row justify-center items-center gap-12 font-semibold text-zinc-300">
        <Link href="">Service Status</Link>
        <Link href="">Open a Ticket</Link>
      </div>
    </div>
  );
};

export default Home;
