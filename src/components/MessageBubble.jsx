import React, { memo } from "react"
import { Copy, RefreshCw, ThumbsDown, ThumbsUp, Volume2, WandSparkles } from "lucide-react"

export const MessageBubble = memo(function MessageBubble({ message }) {
  const isUser = message.role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex flex-col">
        <div
          className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ring-1 ring-border md:max-w-[100%] ${
            isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
          }`}
        >
          <p className="whitespace-pre-line">{message.text}</p>
        </div>

        {!isUser && (
          <div className="mt-2 mx-2 flex items-center gap-3 text-muted-foreground">
            <button className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <Copy className="size-3" />
            </button>
            <button className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <Volume2 className="size-3" />
            </button>
            <button className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <ThumbsUp className="size-3" />
            </button>
            <button className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <ThumbsDown className="size-3" />
            </button>
            <button className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <WandSparkles className="size-3" />
            </button>
            <button className="inline-flex items-center gap-1 text-xs hover:text-foreground">
              <RefreshCw className="size-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
})
