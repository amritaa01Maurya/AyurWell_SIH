import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠ Sorry, something went wrong." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-[#FFFDD0] border border-green-600 rounded-2xl shadow-xl flex flex-col">
      <div className="bg-green-700 text-white p-3 rounded-t-2xl font-bold">
        🌿 Ayurwell Chatbot
      </div>
      <div className="p-3 h-64 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[75%] ${
              msg.sender === "user"
                ? "bg-green-600 text-white ml-auto"
                : "bg-green-100 text-green-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">Bot is typing...</div>}
      </div>
      <div className="flex p-2 border-t">
        <input
          className="flex-1 p-2 border rounded-l-xl outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about doshas..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 rounded-r-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;