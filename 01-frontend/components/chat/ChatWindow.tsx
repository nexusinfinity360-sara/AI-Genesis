import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <div className="flex h-full flex-col rounded-xl bg-gray-50 shadow-lg">
      <MessageList />

      <ChatInput />
    </div>
  );
}