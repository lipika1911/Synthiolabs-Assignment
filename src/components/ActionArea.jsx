import ChatHeader from './ChatHeader'
import InputArea from './InputArea'
import { initialMessages } from '../data/initialMessages'
import { useState } from 'react'
import MessageList from './MessageList'

const ActionArea = () => {
     const [messagesByChat, setMessagesByChat] = useState(initialMessages)
  return (
    <>
        <ChatHeader />
        <section className="relative bg-card grid h-[calc(100svh-260px)] grid-rows-[1fr_auto] md:h-[calc(100svh-180px)]"
        >
            <div className='overflow-y-auto p-4 md:p-6'>
                <MessageList messages={messagesByChat[1] || []} />
            </div>
            <InputArea />
        </section>
    </>
  )
}

export default ActionArea