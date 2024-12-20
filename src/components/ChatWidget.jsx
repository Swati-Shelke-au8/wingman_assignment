import React, { useState } from "react";

function ChatWidget() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    // Add user message
    const newMessages = [...messages, { type: "user", text: inputValue }];
    setMessages(newMessages);
    setInputValue("");

    // Mock auto-response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Thanks for your query! (Auto-response)" }
      ]);
    }, 1000);
  };

  return (
    <div className="p-4 border rounded flex flex-col w-full">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-12 ${
              msg.type === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.type === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l"
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWidget;