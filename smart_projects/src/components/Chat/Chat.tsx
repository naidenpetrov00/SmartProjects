import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageInputProps,
  MessageList,
  MessageModel,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';

import './chat.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

interface ChatProps {
  showChat: boolean;
  messages: MessageModel[];
  setMessages: Dispatch<SetStateAction<MessageModel[]>>;
}

export const Chat = ({ showChat, messages, setMessages }: ChatProps) => {
  const [chatGptIsTyping, setchatGptIsTyping] = useState(false);
  const messageListRef = useRef<any>(null);

  const scroll = useCallback(() => {
    setTimeout(() => {
      messageListRef.current?.scrollToBottom();
    }, 200);
  }, []);
  if (showChat) {
    scroll();
  }

  const handleSend: MessageInputProps['onSend'] = async (message) => {
    messageListRef.current?.scrollToBottom();
    console.log(messageListRef.current);

    const messageData: MessageModel = {
      sender: 'user',
      direction: 'outgoing',
      position: 'single',
      message,
    };
    setMessages((state) => [...state, messageData]);

    setchatGptIsTyping(true);
  };

  return (
    <MainContainer>
      <ChatContainer>
        <MessageList
          typingIndicator={
            chatGptIsTyping ? <TypingIndicator content="Let me think" /> : null
          }
          ref={messageListRef}
        >
          {messages.map((message, index) => (
            <Message key={index} model={message} />
          ))}
        </MessageList>
        <MessageInput
          sendDisabled={false}
          attachButton={false}
          placeholder="Type Message Here"
          onSend={handleSend}
          style={{ fontSize: '17px' }}
        />
      </ChatContainer>
    </MainContainer>
  );
};
