import { createContext, useReducer } from "react";

export const ServerContext = createContext();

export const ServerContextProvider = ({ children }) => {
  const initial_state = {
    channelName: "general",
    serverID: "iwpfqeEh6A0ykZseVBUH",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_SERVER":
        return {
          channelName: action.payload.channelName,
          serverID: action.payload.id,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial_state);

  //console.log(state);

  return (
    <ServerContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ServerContext.Provider>
  );
};
