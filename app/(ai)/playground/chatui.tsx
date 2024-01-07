import { ChatInput, ChatMessages } from "@/components/ui/chat"

const emptyProps = {} as any
const sampleMessages = [
  {
    id: "1",
    content: "THIS IS MY QUESTION",
    role: "user",
  },
  {
    id: "2",
    content:
      'Sure! Here\'s a simple answer that is my answer',
    role: "assistant",
  },
  {
    id: "3",
    content:
      'Thanks',
    role: "user",
  },
  {
    id: "4",
    content:
      'okay',
    role: "assistant",
  },
]

export function ChatDemo() {
  return (
    <div className="mx-auto max-w-5xl space-y-4 p-4">
      <ChatMessages messages={sampleMessages} {...emptyProps} />
      <ChatInput {...emptyProps} />
    </div>
  )
}
