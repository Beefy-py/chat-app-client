import React from "react";
import { OnlineStatusIcon, UserGroupIcon, CloseIcon } from "../icons";

const InfoBar = ({ room, numUsers, showUserList, setShowUserList }) => {
  return (
    <div
      className={`flex items-center p-2 bg-gray-200 justify-between border border-gray-400`}
    >
      <div className="flex items-center">
        <OnlineStatusIcon />
        <h3 className="text-md ml-4 text-gray-500 font-semibold">{room}</h3>
      </div>
      <div className="flex items-center">
        <div
          className="cursor-pointer hover:text-blue-700"
          onClick={() => setShowUserList((prevState) => !prevState)}
        >
          <UserGroupIcon />
        </div>
        <span
          onClick={() => setShowUserList((prevState) => !prevState)}
          className={`text-blue-700 ml-2 ${
            !showUserList && "px-2 "
          } border-2 border-blue-800 rounded-md font-bold cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:text-white`}
        >
          {showUserList ? <CloseIcon /> : numUsers}
        </span>
      </div>
    </div>
  );
};

export default InfoBar;
