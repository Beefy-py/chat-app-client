import React from "react";

const Message = ({ message, name }) => {
  console.log(message, name);

  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (message.user.toLowerCase() === "admin") {
    return (
      <div className="mb-3 mt-1 w-3/4 mx-auto p-4">
        {message.text}
        <p className="text-gray-400 font-semibold text-left">~ Admin</p>
      </div>
    );
  }

  return isSentByCurrentUser ? (
    <div className="m-5 flex justify-end items-center">
      <p className="sentBy italic text-blue-800 font-semibold mr-3 capitalize">
        {trimmedName}
      </p>
      <div className="messageBox bg-sky-200 p-3 rounded-l-xl max-w-[70%] ">
        <p className="text">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="rounded-r m-5 flex justify-start items-center">
      <div className="messageBox bg-slate-300 p-3 rounded-r-xl max-w-[70%] ">
        <p className="text">{message.text}</p>
      </div>
      <p className="sentBy italic text-slate-700 font-semibold ml-3 capitalize">
        {message.user}
      </p>
    </div>
  );
};

export default Message;
