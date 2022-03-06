import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Message } from "./";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="border-l border-r border-gray-400 break-words h-[60vh]">
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
