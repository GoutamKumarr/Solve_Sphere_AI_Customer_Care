import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  MoreVertical,
  Send,
  Plus,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";
import MessageBubble from "../components/MessageBubble";
import { sendMessagesToServer } from "../services/chat.service";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "../components/ui/spinner";
import { useNavigate } from "react-router-dom";

const CHATS = [
  {
    id: 1,
    name: "Spring boot..",
    lastMessage: "How to create rest api in spring boot?",
    unread: 2,
    initials: "SB",
  },
  {
    id: 2,
    name: "React helpers",
    lastMessage: "Can you suggest a hook for this?",
    unread: 0,
    initials: "RH",
  },
  {
    id: 3,
    name: "Database team",
    lastMessage: "Schema migration planned for tonight.",
    unread: 1,
    initials: "DB",
  },
];

const INITIAL_CONVERSATION = [
  {
    id: uuidv4(),
    author: "bot",
    text: "Hello! How can I assist you?",
    at: new Date().toLocaleTimeString(),
  },
];

function Chat() {
  const [activeChat, setActiveChat] = useState(CHATS[0]);
  const [messages, setMessages] = useState(INITIAL_CONVERSATION);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [conversationId, setConversationId] = useState("");

  const endRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setConversationId(uuidv4());
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessages() {
    const textMessage = draft.trim();
    if (!textMessage || sending) return;

    setSending(true);

    // User message
    setMessages((prev) => [
      ...prev,
      {
        id: uuidv4(),
        author: "user",
        text: textMessage,
        at: new Date().toLocaleTimeString(),
      },
    ]);

    setDraft("");

    try {
      const responseFromAI = await sendMessagesToServer(
        textMessage,
        conversationId
      );

      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          author: "bot",
          text: responseFromAI || "No response from AI",
          at: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          author: "bot",
          text: "⚠️ Something went wrong. Please try again.",
          at: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <ArrowLeft />
          </button>
          <div>
            <h1 className="text-xl font-bold">Chat Support</h1>
            <p className="text-sm text-gray-400">AI Powered Support</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg"
        >
          <LogOut size={18} /> Dashboard
        </button>
      </nav>

      <div className="h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col bg-gray-800 border-r border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <div className="flex gap-2 mb-3">
              <button className="p-2 bg-blue-600 rounded-lg">
                <Plus />
              </button>
              <h2 className="font-semibold">Conversations</h2>
            </div>
            <div className="relative">
              <input
                placeholder="Search..."
                className="w-full pl-10 py-2 bg-gray-700 rounded-lg"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <ScrollArea className="flex-1 p-2">
            {CHATS.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`w-full p-3 rounded-lg text-left ${
                  activeChat.id === chat.id
                    ? "bg-gray-700"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="flex justify-between">
                  <span>{chat.name}</span>
                  {chat.unread > 0 && (
                    <span className="text-xs bg-red-500 px-2 rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 truncate">
                  {chat.lastMessage}
                </p>
              </button>
            ))}
          </ScrollArea>
        </aside>

        {/* Chat Area */}
        <section className="flex flex-col">
          <ScrollArea className="flex-1 p-6">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} author={msg.author} at={msg.at}>
                {msg.text}
              </MessageBubble>
            ))}
            <div ref={endRef} />
          </ScrollArea>

          <div className="p-4 border-t border-gray-700 flex gap-3">
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !sending) sendMessages();
              }}
              placeholder="Type message..."
              className="flex-1 bg-gray-700 px-4 py-2 rounded-lg"
            />
            <button
              disabled={sending}
              onClick={sendMessages}
              className="bg-blue-600 px-5 py-2 rounded-lg flex items-center gap-2"
            >
              {sending ? <Spinner /> : <Send size={16} />}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Chat;
