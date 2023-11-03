import React, { useContext, useReducer } from "react";
import { ServerContext } from "./components/ServerContext";

const Channel = ({ id, channelName }) => {
  const { dispatch } = useContext(ServerContext);

  // const initial_state = {
  //   channelName: "null",
  //   serverID: "null",
  // };

  // const reducer = (state, action) => {
  //   //console.log(state.channelName);
  //   switch (action.type) {
  //     case "CHANGE_SERVER":
  //       return {
  //         channelName: action.payload.channelName,
  //         serverID: action.payload.id,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initial_state);

  // Now i need useContext to be able to send it to Chat.js and send as props
  // to the chathead and messages

  const handleChange = (id, channelName) => {
    dispatch({ type: "CHANGE_SERVER", payload: { id, channelName } });
  };

  //probably need useContext to be able to send it to another function we'll see. We'll need to send our dispatch to the chat MAYBE.

  //We will need to send use an onclick function to send out data using dispatch and useReducer. It should send to Servers.js or chat.js and it will be able to render the chat depending on the chat ID we clicked.

  return (
    <div
      className="text-gray-500 p-1 cursor-pointer hover:bg-gray-600 hover:text-white hover:rounded-md ml-2 mr-2"
      onClick={() => handleChange(id, channelName)}
    >
      <p className="pl-3">
        <span>#</span> {channelName}
      </p>
    </div>
  );
};

export default Channel;
