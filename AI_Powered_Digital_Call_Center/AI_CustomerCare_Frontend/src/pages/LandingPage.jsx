import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, BarChart3, Zap } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          AI Customer Care
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-white hover:text-blue-400 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Intelligent Customer Support <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Powered by AI</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Revolutionize your customer support with AI-powered solutions. Instant responses, 24/7 availability, and intelligent insights.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105"
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              <MessageCircle size={40} className="text-blue-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
              <p className="text-gray-400">Round-the-clock customer assistance powered by advanced AI algorithms.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              <Zap size={40} className="text-purple-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Instant Responses</h4>
              <p className="text-gray-400">Get immediate answers to customer queries with lightning-fast AI processing.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              <BarChart3 size={40} className="text-green-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Analytics</h4>
              <p className="text-gray-400">Comprehensive insights into customer interactions and satisfaction metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-center text-gray-500 border-t border-gray-700">
        <p>&copy; 2024 AI Customer Care. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
