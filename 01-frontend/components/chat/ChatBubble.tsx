interface ChatBubbleProps {
  role: "user" | "assistant";
  message: string;
}

export default function ChatBubble({
  role,
  message,
}: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow
          ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-white text-black border"
          }`}
      >
        {message}
      </div>
    </div>
  );
}