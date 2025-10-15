import React from 'react'
import { MessageBubble } from './MessageBubble'

const MessageList = ({messages}) => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </div>
  )
}

export default MessageList