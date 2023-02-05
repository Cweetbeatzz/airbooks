import React, {
  useState,
  createContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { io } from "socket.io-client";
import { Peer } from "simple-peer";

export const SocketContext = createContext();

//Api Url
const socket = io("http://localhost:3000");

export const SocketProvider = ({ children }) => {
  //##########################################################
  const [getStream, setStream] = useState(null);

  const myVideo = useRef();
  //##########################################################

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });

      socket.on()
  });
  //##########################################################

  const CallUser = () => {};
  //##########################################################

  const AnswerCall = () => {};
  //##########################################################

  const EndCall = () => {};
  //##########################################################

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};
