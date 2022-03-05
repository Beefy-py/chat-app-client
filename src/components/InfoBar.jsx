import React from "react";
import { UserList } from ".";
import { OnlineStatusIcon, CloseIcon, UserGroupIcon } from "../icons";

const InfoBar = ({ room, numUsers, showUserList, setShowUserList }) => {
  return (
    <div
      className={`flex items-center sm:rounded-t-md ${
        showUserList && "lg:rounded-r-none"
      } p-2 bg-gray-200 justify-between border border-gray-400`}
    >
      <div className="flex items-center">
        <OnlineStatusIcon />
        <h3 className="text-md ml-4 text-gray-500 font-semibold">{room}</h3>
      </div>
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => setShowUserList((prevState) => !prevState)}
        >
          <UserGroupIcon />
        </div>
        <span
          onClick={() => setShowUserList(true)}
          className="text-blue-700 ml-2 px-2 border-2 border-blue-800 rounded-md font-bold cursor-pointer"
        >
          {numUsers}
        </span>
      </div>

      <div className="">
        <a href="/">
          <CloseIcon />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;