import ChatBubble from "./ChatBubble";

const messages = [
  {
    id: 1,
    role: "assistant" as const,
    message: "👋 Hello! I am Genesis AI. How can I help you today?",
  },
  {
    id: 2,
    role: "user" as const,
    message: "Hi Genesis! Build me an AI platform.",
  },
];

export default function MessageList() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
      {messages.map((msg) => (
        <ChatBubble
          key={msg.id}
          role={msg.role}
          message={msg.message}
        />
      ))}
    </div>
  );
}