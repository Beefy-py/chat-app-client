import React from "react";
import { ExclamationIcon, CloseIcon } from "../icons";

const AlertMessage = ({ message, setAlert }) => {
  return (
    <div
      id="alert-2"
      className="flex p-4 my-8 bg-red-100 rounded-lg dark:bg-red-200 w-[80%] left-[10%] sm:w-2/4 sm:left-[25%] absolute"
      role="alert"
    >
      <ExclamationIcon color={"#A30000"} />
      <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
        Woops! {message}
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
        data-collapse-toggle="alert-2"
        aria-label="Close"
        onClick={() => setAlert("")}
      >
        <span class="sr-only">Close</span>
        <CloseIcon />
      </button>
    </div>
  );
};

export default AlertMessage;
