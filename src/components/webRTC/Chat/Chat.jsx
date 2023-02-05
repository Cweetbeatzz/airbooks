import React from "react";
import { useState } from "react";
import socket from "socket.io-client";
import {
  Grid,
  Typography,
  TextField,
  List,
  ListItem,
  Button,
} from "@material-ui/core";

export default function Chat() {
  //####################################################################

  const [chat, setChat] = useState();
  const [Message, setMessage] = useState([]);

  //####################################################################

  const Submit = (event) => {
    event.preventDefault();

    socket.emit("chat", chat);
  };
  //####################################################################
  return (
    <div className="container">
      <div className="chat">
        <div className="window">
          <div className="output"></div>
        </div>
      </div>

      <div>
        <div className="form-group row mb-3">
          <div className="col-md-12">
            <input
              type="text"
              name="Message"
              placeholder="Enter message"
              className="form-control text-dark small"
              onChange={(event) => setChat(event.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4 mx-auto">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className="btn btn-primary text-white"
            id="login"
            value="Login"
            onClick={() => Submit()}
          >
            <strong>SEND</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}
