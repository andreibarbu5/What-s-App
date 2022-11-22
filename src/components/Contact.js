import React from "react";

const Contact = ({ img, name, message }) => {
  return (
    <div className="overflow-hidden cursor-pointer ">
      <div className="flex justify-between  pb-2 bg-white md:rounded-bl-[4rem]   px-4">
        <div className="flex items-center border-b pb-2">
          <div className="flex w-16 h-16 overflow-hidden rounded-full">
            <img
              src={img}
              alt=""
              className="object-cover w-full rounded-full hover:scale-110 duration-100 ease-out"
            />
          </div>
          <div className="pl-3">
            <p className="font-semibold text-[18px]">{name}</p>
            <p className="text-gray-600 w-[20rem] md:w-[10rem]  lg:w-[20rem] truncate">
              {message}
            </p>
          </div>
        </div>

        <div className="flex h-full  text-gray-400 ">
          <p className="">8:51</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
