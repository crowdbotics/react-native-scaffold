import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class ChatScreen extends React.Component {

  constructor(props) {
   super(props);
   state = {
     messages: [],
   }
 }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Greetings!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://cdn-images-1.medium.com/max/1200/1*D0E03PmeVga1wLJt7YLd1w.png',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={ {
          _id: 1,
        }}
      />
    )
  }
}
