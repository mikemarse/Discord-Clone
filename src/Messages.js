import React from "react";

const Messages = ({ timestamp, message, user, orderTime }) => {
  return (
    <div className="flex text-gray-400 items-center hover:bg-gray-800 text-sm mt-3 mb-3 pt-2 pb-2">
      <img
        src={user.photoURL}
        className="h-10 w-10 ml-4 mr-4 cursor-pointer rounded-full"
        alt="user"
      />
      <div>
        <p className="font-bold">
          {user.displayName}
          <span className="ml-3 text-xs font-normal inline-block text-gray-500">
            {timestamp}
          </span>
        </p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
