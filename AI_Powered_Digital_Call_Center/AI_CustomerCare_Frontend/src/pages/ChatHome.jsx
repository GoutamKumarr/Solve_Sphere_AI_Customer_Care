import React from "react";
import { Button } from "../components/ui/button";
import { Bot, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router";

function ChatHome() {
  const navigate = useNavigate();

  const handleChatStartClick = () => {
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="inline-flex p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
          <Bot size={80} className="text-white" />
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Welcome to Help Desk System
        </h1>

        <p className="text-xl text-gray-400">
          Get instant AI-powered support for all your questions
        </p>

        <button
          onClick={handleChatStartClick}
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition flex items-center gap-3 mx-auto"
        >
          <MessageCircle size={24} />
          Start Getting Help
        </button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-400">Always available to help</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Instant Responses</h3>
            <p className="text-sm text-gray-400">Get answers in seconds</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-400">Smart and accurate help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHome;
