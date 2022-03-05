import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import io from "socket.io-client";
import { InfoBar, Input, Messages, UserList } from ".";

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
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", (roomData) => {
      console.log(roomData);
      setUsersInRoom([...roomData.users]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log("Showing users: " + showUserList);

  return (
    <div className="outer ">
      <div
        className={`w-[90%] sm:w-2/4 mx-auto my-20 grid grid-cols-1 ${
          showUserList && "lg:grid-cols-2"
        } `}
      >
        <div className="chat-box">
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
          />
        </div>

        {showUserList && <UserList users={usersInRoom} />}
      </div>
    </div>
  );
};

export default Chat;
