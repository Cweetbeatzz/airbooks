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
  const [getCall, setCall] = useState({});
  const [getEvent, setEvent] = useState("");
  const [acceptCall, setAcceptCall] = useState(false);
  const [CallEnded, setCallEnded] = useState(false);

  const myVideo = useRef();
  //##########################################################
  //set call details

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });

    socket.on("event", (id) => {
      setEvent(id);
    });

    socket.on("CallUser", ({ from, name: callerName, signal }) => {
      setCall({ isRecievedCall: true, from, name: callerName, signal });
    });
  }, []);

  //##########################################################

  const CallUser = () => {};
  //##########################################################

  const AnswerCall = () => {
    setAcceptCall(true);

    const peer = new Peer({ initatior: false, trickle: false, getStream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: getCall.from });
    });
  };
  //##########################################################

  const EndCall = () => {
    setCallEnded(true);
  };
  //##########################################################

  return (
    <SocketContext.Provider value={{ CallUser, AnswerCall, EndCall }}>
      {children}
    </SocketContext.Provider>
  );
};
