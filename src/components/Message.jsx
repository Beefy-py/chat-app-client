import React from "react";
import { InfoIcon } from "../icons";

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  const infoClasses = message.color
    ? `text-${message.color}-700 bg-${message.color}-100 dark:bg-${message.color}-200 dark:text-${message.color}-800`
    : "";

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (message.user.toLowerCase() === "admin") {
    return (
      <div className={"flex p-4 text-sm rounded-l " + infoClasses} role="alert">
        <InfoIcon />
        <div>
          <span className="font-medium">Admin: </span> {message.text}
        </div>
      </div>
    );
  }

  return isSentByCurrentUser ? (
    <div className="m-5 flex justify-end items-center">
      <p className="sentBy italic text-blue-800 font-semibold mr-3 capitalize">
        {trimmedName}
      </p>
      <div className="messageBox bg-sky-200 p-3 rounded-l-3xl max-w-[70%] ">
        <p className="text">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="rounded-r m-5 flex justify-start items-center">
      <div className="messageBox bg-slate-300 p-3 rounded-r-3xl max-w-[70%] ">
        <p className="text">{message.text}</p>
      </div>
      <p className="sentBy italic text-slate-700 font-semibold ml-3 capitalize">
        {message.user}
      </p>
    </div>
  );
};

export default Message;
