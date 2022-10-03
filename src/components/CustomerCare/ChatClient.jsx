import React from "react";
import { useClient } from "./hooks/useClient";
// import "stream-chat-react/dist/css/v2/index.css";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

export default function ChatClient() {
  const userToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2ludGVyLWxpbWl0LTgiLCJleHAiOjE2NjQ4MzM3NjV9.CIkJR6d9ucWqfgz16ZjaqCAd-J4dTkhh0ljrOnYRpi8";

  const user = {
    id: "winter-limit-8",
    name: "winter",
    image: "https://getstream.io/random_png/?id=winter-limit-8&name=winter",
  };

  const filters = { type: "messaging", members: { $in: ["winter-limit-8"] } };
  const sort = { last_message_at: -1 };

  const chatClient = useClient({
    apiKey: "dz5f4d5kzrue",
    userData: user,
    tokenOrProvider: userToken,
  });

  if (!chatClient) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      <Chat client={chatClient} theme="str-chat__theme-light">
        <ChannelList filters={filters} sort={sort} />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}
