import React from "react";
import profile3 from "../assets/face3.jpg";
import landscape from "../assets/landscape.jpg";
import mountains from "../assets/mountains.jpg";
import { TbApps } from "react-icons/tb";
import { AiOutlineFile } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";
import Message from "../components/Message";

const Chats = () => {
  const messages = [
    {
      name: "Joe Doe",
      message: "Hi i'm Joe Doe",
      css1: "bg-white/80 ",
      css2: "justify-start",
      timestamp: "10:35",
    },
    {
      message: "Nice to meet you Joe Doe!",
      css1: "bg-black/90 text-white",
      css2: "justify-end",
      timestamp: "10:36",
    },
    {
      name: "Joe Doe",
      message: "Are you subscribed yet?",
      css1: "bg-white/80 ",
      css2: "justify-start",
      timestamp: "10:35",
    },
    {
      message: "Actually i will subscribe to Goose Dev!",
      css1: "bg-black/90 text-white",
      css2: "justify-end",
      timestamp: "10:36",
    },
    {
      name: "Joe Doe",
      message: "Have you joined the discord as well?",
      css1: "bg-white/80 ",
      css2: "justify-start",
      timestamp: "10:35",
    },
    {
      message: "No but i will join.",
      css1: "bg-black/90 text-white",
      css2: "justify-end",
      timestamp: "10:36",
    },
  ];
  return (
    <div className="hidden md:flex flex-col justify-between items-center w-full bg-[#eeedef] border-l relative  rounded-r-[2rem]  ">
      {/* Header */}
      <div className=" flex justify-between items-center px-4  w-full h-[4.5rem] z-20 bg-[#eeedef] rounded-tr-[2rem]">
        <div className="flex items-center">
          <div className="flex w-[3.1rem] h-[3.1rem] bg-[#dda117] rounded-full shrink-0 ">
            <img
              src={profile3}
              alt=""
              className="object-cover rounded-full p-1"
            />
          </div>
          <div className="pl-2 ">
            <p className="font-bold text-black/90">Cool Kids</p>
            <p className="text-[14px] w-[15rem] whitespace-nowrap truncate text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="text-[23px]">
          <GrSettingsOption />
        </div>
      </div>
      {/* Messages */}
      <div className="absolute top-0 w-full  h-full ">
        <div className="absolute flex h-full w-full lg:hidden  rounded-r-[2rem]">
          <img
            src={landscape}
            alt=""
            className="object-cover h-full w-full rounded-r-[3rem]"
          />
        </div>
        <div className="hidden lg:flex absolute   h-full w-full rounded-tr-[3rem]">
          <img
            src={mountains}
            alt=""
            className="object-cover h-full w-full rounded-r-[3.1rem]"
          />
        </div>
        <div className="relative z-20  pt-[4.5rem] mt-3 lg:mt-4">
          {messages.map((message) => (
            <Message
              name={message.name}
              message={message.message}
              css1={message.css1}
              css2={message.css2}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </div>

      {/* Input for message */}
      <div className="relative z-20  bottom-0 bg-[#eeedef]  w-full px-4 py-2 flex items-center rounded-br-[3rem]   ">
        <div className="">
          <TbApps className="w-8 h-8" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full mx-4 p-2 rounded-full pl-4  "
        />
        <div className="">
          <AiOutlineFile className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Chats;
