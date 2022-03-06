import React from "react";
import { PaperPlaneIcon } from "./../icons";

const Input = ({ message, setMessage, sendMessage, showUserList }) => {
  return (
    <div className="flex">
      <input
        id="message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        value={message}
        type="text"
        className="w-full rounded-none bg-blue-100 border border-gray-400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block text-sm  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-r-0"
        placeholder="Type a message..."
      />
      <button
        onClick={(e) => sendMessage(e)}
        className={`hover:bg-blue-800  focus:ring-2 transition-all duration-300 focus:ring-blue-300 focus:border-blue-700  inline-flex font-semibold items-center px-3 text-sm text-white bg-blue-700 border border-r-gray-400 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600`}
      >
        Send
        <PaperPlaneIcon
          styling={{
            transform: "rotate(90deg)",
            color: "white",
            marginLeft: ".25rem",
          }}
        />
      </button>
    </div>
  );
};

export default Input;
