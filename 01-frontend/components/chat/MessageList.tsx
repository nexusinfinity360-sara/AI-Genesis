import ChatBubble from "./ChatBubble";
import { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <ChatBubble
          key={msg.id}
          role={msg.role}
          message={msg.content}
        />
      ))}
    </div>
  );
}