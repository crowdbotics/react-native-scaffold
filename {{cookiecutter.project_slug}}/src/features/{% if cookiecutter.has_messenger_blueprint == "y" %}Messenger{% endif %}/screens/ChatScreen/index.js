import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import PubNubReact from 'pubnub-react';

export default class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-09038c51-029c-47a7-95f2-b6c7407afb12',
      subscribeKey: 'sub-c-6b1bee04-ba9f-11e9-8753-ce76e7dc5905'
    });
    this.pubnub.init(this);
    state = {
     messages: [],
    }
    this.id = this.randomid();
  }
  randomid = () => {
    return Math.floor(Math.random() * 100);
  };

  componentWillUnmount() {
    this.pubnub.unsubscribe({ channels: ['ReactChat'] });
  }

  componentWillMount() {
    this.pubnub.subscribe({
      channels: ["ReactChat"],
      message: message => console.log("sub", message),
    });

    this.pubnub.getMessage("ReactChat", m => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, m["message"]),
      }));
    });
  }

  onSend(messages = []) {
    this.pubnub.publish({
      message: messages,
      channel: "ReactChat",
    });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={ {
          _id: this.id,
          name: 'React Native',
          avatar: 'https://cdn-images-1.medium.com/max/1200/1*D0E03PmeVga1wLJt7YLd1w.png',
        }}
      />
    )
  }
}
