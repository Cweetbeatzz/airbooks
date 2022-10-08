import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
import { StreamChat } from "stream-chat";
import { chatApiKey } from "./chatConfig";
//####################################################################

export const StreamContext = createContext();

//####################################################################

export const StreamProvider = ({ children }) => {
  //####################################################################

  //getters & setters
  const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
  // chatConfig.js
  const chatApiKey = "etctgevmgc2n";
  const [clientIsReady, setClientIsReady] = useState(false);
  //return
  //####################################################################

  return (
    <StreamContext.Provider
      value={{ chatApiKey, clientIsReady, setClientIsReady }}
    >
      {children}
    </StreamContext.Provider>
  );
};
