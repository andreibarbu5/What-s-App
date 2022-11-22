import React from "react";

const Message = ({ css1, css2, name, message, timestamp }) => {
  return (
    <div className={`${css2} flex`}>
      <div
        className={`${css1} flex flex-col p-2 pr-16 pl-4 m-2 lg:mx-6 rounded-[1rem]  `}
      >
        <div className="flex flex-col ">
          {name && <p className="pr-3 font-bold">{name}</p>}

          <p className="text-[15px] -mt-1">{message}</p>
        </div>

        <p className="text-[12px] text-gray-500 text-end -mr-14 -my-1.5">
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default Message;
