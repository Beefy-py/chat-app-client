import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ChatsIcon } from "./../icons";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div className="flex justify-center h-full w-full">
      <div className="w-[80%] sm:w-2/4 my-40 rounded-md bg-gray-200 px-10 pb-5 border border-gray-300">
        <h1 className="text-2xl pt-5 my-5 font-bold border-b border-gray-400">
          <ChatsIcon color={"#245bc8"} /> Chat Join
        </h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={inputStyle}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Example: John"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="room"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Room
            </label>
            <input
              type="text"
              id="room"
              className={inputStyle}
              onChange={(e) => setRoom(e.target.value)}
              value={room}
              placeholder="Example: Tech"
              required
            />
          </div>
        </form>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
