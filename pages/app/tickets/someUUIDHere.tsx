import type { NextPage } from "next";
import PaddedButton from "../../../components/global/PaddedButton";
import Navbar from "../../../components/Navbar";
import TicketReply from "../../../components/tickets/TicketReply";

const TicketHome: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-row h-[95vh]">
        <div className="w-1/3 flex justify-start">
          <div className="bg-zinc-800 p-4 rounded-2xl rounded-none">
            <h1 className="text-white text-2xl">
              <span className="text-blue-500">#FC1843</span> Cannot access
              server
            </h1>
            <div className="px-4">
              <h1 className="text-gray-200 text-lg font-semibold ">
                Initiated by Owen Rummage
              </h1>
              <div className="h-6" />
              <div className="mb-6">
                <h1 className="text-zinc-500 font-bold">Assigned Person</h1>
                <h1 className="text-white text-2xl">Gavin Endsley</h1>
              </div>
              <div className="mb-6">
                <h1 className="text-zinc-500 font-bold">Related Service</h1>
                <h1 className="text-white text-2xl">Virtual Machine</h1>
              </div>
              <div>
                <h1 className="text-zinc-500 font-bold">Priority</h1>
                <h1 className="text-red-500 text-2xl">High</h1>
              </div>
              <div>
                <h1 className="text-zinc-500 font-bold">Last Updated</h1>
                <h1 className="text-white text-2xl">2:07AM</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-auto w-2/3 flex hidescroll">
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="bg-zinc-800 w-fullrounded-2xl mt-5">
                <div className="w-full flex flex-row  p-4 rounded-2xl">
                  <img
                    src="https://pbs.twimg.com/profile_images/1523887399507415040/4wrMCQ8i_400x400.jpg"
                    className="rounded-full h-14 w-14"
                  />
                  <div className="text-white ml-4">
                    <h1 className="text-2xl">Lea Gray</h1>
                    <h1 className="font-semibold">lleyton@fyralabs.com</h1>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 my-2">
                  <textarea
                    className="bg-zinc-700 rounded-xl p-4 w-5/6 mt-6 resize-none"
                    placeholder="Type your response here!"
                  />
                  <div className="flex flex-row gap-12">
                    <PaddedButton className="bg-blue-500 text-white">Reply</PaddedButton>
                    <PaddedButton className="bg-yellow-500 text-white">Change Status</PaddedButton>
                    <PaddedButton className="bg-red-500 text-white">Close Ticket</PaddedButton>
                  </div>
                </div>
              </div>

              <TicketReply 
                name="Lea Gray"
                email="lleyton@fyralabs.com"
                avatar="https://pbs.twimg.com/profile_images/1523887399507415040/4wrMCQ8i_400x400.jpg"
                body={`
                  I need to add hard drives to my server. 2x4tb should be
                  suffucuent. Im goign to need them by the 24th of August so
                  that we can match our deadline for deployment. Is this
                  possible?
                `}
                date={new Date()}
              />

              <TicketReply 
                name="Lea Gray"
                email="lleyton@fyralabs.com"
                avatar="https://pbs.twimg.com/profile_images/1523887399507415040/4wrMCQ8i_400x400.jpg"
                body={`
                  I need to add hard drives to my server. 2x4tb should be
                  suffucuent. Im goign to need them by the 24th of August so
                  that we can match our deadline for deployment. Is this
                  possible?
                `}
                date={new Date()}
              />

              <TicketReply 
                name="Lea Gray"
                email="lleyton@fyralabs.com"
                avatar="https://pbs.twimg.com/profile_images/1523887399507415040/4wrMCQ8i_400x400.jpg"
                body={`
                  I need to add hard drives to my server. 2x4tb should be
                  suffucuent. Im goign to need them by the 24th of August so
                  that we can match our deadline for deployment. Is this
                  possible?
                `}
                date={new Date()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketHome;
