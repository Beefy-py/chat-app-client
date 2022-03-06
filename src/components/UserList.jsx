import React, { useState } from "react";
import { UserIcon } from "./../icons";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div className="border p-3  border-gray-400 bg-gray-200">
      <h3 className="text-md font-semibold text-blue-600">Users In Chat:</h3>

      <ul className="w-48 text-sm font-medium text-gray-900">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-slate-300 my-1 rounded-md py-2 px-4 w-full border-b  border-gray-200 dark:border-gray-600 flex items-center"
          >
            <UserIcon />
            <span className="text-gray-800 ml-3">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
