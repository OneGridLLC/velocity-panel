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
          <h1 className="text-white text-3xl">Resources</h1>
          <div className="p-6 ">
            <ResourcesTable>
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
            </ResourcesTable>
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
