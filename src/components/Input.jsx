import React from "react";
import { ArrowCircleIcon } from "./../icons";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="flex items-center">
      <textarea
        id="message"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border  border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        value={message}
      ></textarea>
    </div>
  );
};

export default Input;