import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation, Link } from "react-router-dom";

import io from "socket.io-client";
import { InfoBar, Input, Messages, UserList } from ".";
import { LogoutIcon } from "../icons";

let socket;
const API =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://room-chat-app-mern.herokuapp.com/";
console.log(API);
console.log(process.env.NODE_ENV);

const Chat = () => {
  const location = useLocation();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [usersInRoom, setUsersInRoom] = useState([]);
  const [showUserList, setShowUserList] = useState(false);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(API);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [API, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log("message received", message);
      setMessages([...messages, message]);
    });

    socket.on("roomData", (roomData) => {
      setUsersInRoom([...roomData.users]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outer ">
      <div
        className={`w-[90%] sm:w-2/4 mx-auto my-20 grid grid-cols-1 ${
          showUserList && "lg:grid-cols-3"
        } `}
      >
        <div className="chat-box col-span-2">
          <InfoBar
            room={room}
            numUsers={usersInRoom.length}
            showUserList={showUserList}
            setShowUserList={setShowUserList}
          />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            showUserList={showUserList}
          />
        </div>

        {showUserList && <UserList users={usersInRoom} />}
      </div>
      <div className="w-max mx-auto my-20">
        <a href="/" className="">
          <button
            type="button"
            className="text-red-700 transition-all duration-300 flex items-center hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <span className="mr-2">Leave Chat</span>
            <LogoutIcon />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Chat;
