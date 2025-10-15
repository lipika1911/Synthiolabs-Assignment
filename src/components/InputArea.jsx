import { ArrowUp, Paperclip } from 'lucide-react'
import React, { useState } from 'react'

const InputArea = () => {
    const [text, setText] = useState("")

    function handleSend() {
        setText("")
    }

  return (
    <div className="rounded-2xl border border-gray-100 shadow-md bg-background/70 p-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:p-4 mx-8">
      <div className="mx-auto flex max-w-8xl items-end gap-3">
        <button
          className="inline-flex items-center justify-left rounded-full border border-border bg-background p-3 text-muted-foreground hover:text-foreground"
          aria-label="Attach"
        >
          <Paperclip className="size-4" />
        </button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          placeholder="Type something..."
          className="min-h-[44px] flex-1 resize-none bg-background px-4 py-3 outline-none placeholder:text-muted-foreground"
        />
        <button
          onClick={handleSend}
          className="rounded-full bg-primary p-3 text-primary-foreground shadow transition hover:opacity-90"
        >
          <ArrowUp className='size-4'/>
        </button>
      </div>
    </div>
  )
}

export default InputArea