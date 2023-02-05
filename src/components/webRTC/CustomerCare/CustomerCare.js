import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import cookies from "universal-cookie";

export default function CustomerCare() {
  const chatApiKey = "etctgevmgc2n";
  const chatClient = new StreamChat(chatApiKey);
  const userToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2ludGVyLWxpbWl0LTgiLCJleHAiOjE2NjQ4MzM3NjV9.CIkJR6d9ucWqfgz16ZjaqCAd-J4dTkhh0ljrOnYRpi8";

  chatClient.connectUser(
    {
      id: "winter-limit-8",
      name: "winter",
      image: "https://getstream.io/random_png/?id=winter-limit-8&name=winter",
    },
    userToken
  );

  const channel = chatClient.channel("messaging", "custom_channel_id", {
    // add as many custom fields as you'd like
    image: "https://www.drupal.org/files/project-images/react.png",
    name: "Talk about React",
    members: ["winter-limit-8"],
  });
  return (
    <div>
      <Chat client={chatClient} theme="str-chat__theme-light">
        {/* <ChannelListContainer />
        <ChannelContainer /> */}
        {/* <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel> */}
      </Chat>
    </div>
  );
}
