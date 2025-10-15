import { Phone, Video } from "lucide-react"

const chat = [{
    id: "1",
    name: "Dr. Emily Chen",
    title: "Medical Oncologist",
    lastMessage: "What roles do regulatory affairs...",
    avatar: "./doctor_male.png",
  }]

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between rounded-t-2xl bg-card px-4 py-3 border-b-1 border-gray-100 md:px-5">
      <div className="flex items-center gap-3">
        <img src={chat[0].avatar} alt="" width={44} height={44} className="rounded-full" />
        <div className="leading-tight">
          <div className="font-medium">{chat[0].name}</div>
          <div className="text-sm text-muted-foreground">{chat[0].title}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-full border border-border bg-background p-2 text-muted-foreground hover:text-foreground"
          aria-label="Start video chat"
        >
          <Video className="size-4" />
        </button>
        <button
          className="rounded-full border border-border bg-background p-2 text-muted-foreground hover:text-foreground"
          aria-label="Start audio call"
        >
          <Phone className="size-4" />
        </button>
      </div>
    </div>
  )
}

export default ChatHeader