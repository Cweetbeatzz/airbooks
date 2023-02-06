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
  const [getName, setName] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
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

  const CallUser = (id) => {
    const peer = new Peer({ initatior: true, trickle: false, getStream });

    peer.on("signal", (data) => {
      socket.emit("CallUser", {
        userToCall: id,
        signalData: data,
        from: getEvent,
        getName,
      });
    });

    peer.on("stream", (currenttream) => {
      userVideo.current.srcObject = currenttream;
    });

    //decide to accept or decline the call
    socket.on("allAccepted", (signal) => {
      setAcceptCall(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  //##########################################################

  const AnswerCall = () => {
    setAcceptCall(true);

    const peer = new Peer({ initatior: false, trickle: false, getStream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: getCall.from });
    });

    peer.on("stream", (currenttream) => {
      userVideo.current.srcObject = currenttream;
    });

    peer.signal(getCall.signal);

    connectionRef.current = peer;
  };

  //##########################################################

  const EndCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };
  //##########################################################

  return (
    <SocketContext.Provider
      value={{
        CallUser,
        AnswerCall,
        EndCall,
        myVideo,
        userVideo,
        getName,
        setName,
        getStream,
        acceptCall,
        CallEnded,
        getEvent,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
