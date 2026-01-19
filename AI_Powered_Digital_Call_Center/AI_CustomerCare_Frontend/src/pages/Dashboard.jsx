import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, MessageCircle, TrendingUp, Clock, Users, X, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeModal, setActiveModal] = useState(null);
  const [newConversation, setNewConversation] = useState({ customerName: '', issue: '' });

  // Sample conversation data
  const recentConversations = [
    { id: 1, customer: 'John Smith', issue: 'Product inquiry', time: '2 mins ago', status: 'active' },
    { id: 2, customer: 'Sarah Johnson', issue: 'Order tracking', time: '15 mins ago', status: 'resolved' },
    { id: 3, customer: 'Mike Brown', issue: 'Technical support', time: '1 hour ago', status: 'pending' },
    { id: 4, customer: 'Emily Davis', issue: 'Refund request', time: '2 hours ago', status: 'active' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNewConversation = () => {
    if (newConversation.customerName && newConversation.issue) {
      console.log('New conversation created:', newConversation);
      setNewConversation({ customerName: '', issue: '' });
      setActiveModal(null);
      navigate('/chat');
    }
  };

  const handleActionClick = (action) => {
    switch(action) {
      case 'conversation':
        setActiveModal('conversation');
        break;
      case 'analytics':
        navigate('/analytics');
        break;
      case 'settings':
        setActiveModal('settings');
        break;
      case 'knowledge':
        navigate('/knowledge-base');
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setNewConversation({ customerName: '', issue: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-400 text-sm">Welcome, {user?.name || user?.email || 'User'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/chat')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition font-semibold"
            >
              <MessageSquare size={20} />
              Go to Chat
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg flex items-center gap-2 transition font-semibold"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Conversations</p>
                <h3 className="text-3xl font-bold mt-2">1,245</h3>
                <p className="text-green-400 text-xs mt-1">+12% from last week</p>
              </div>
              <MessageCircle size={40} className="text-blue-500 opacity-30" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Customer Satisfaction</p>
                <h3 className="text-3xl font-bold mt-2">94%</h3>
                <p className="text-green-400 text-xs mt-1">+5% improvement</p>
              </div>
              <TrendingUp size={40} className="text-purple-500 opacity-30" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg Response Time</p>
                <h3 className="text-3xl font-bold mt-2">45s</h3>
                <p className="text-green-400 text-xs mt-1">-10% faster</p>
              </div>
              <Clock size={40} className="text-green-500 opacity-30" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Chats</p>
                <h3 className="text-3xl font-bold mt-2">23</h3>
                <p className="text-blue-400 text-xs mt-1">Real-time updates</p>
              </div>
              <Users size={40} className="text-yellow-500 opacity-30" />
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Conversations */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Recent Conversations</h2>
            <div className="space-y-4">
              {recentConversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => navigate('/chat')}
                  className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{conv.customer}</h3>
                      <p className="text-sm text-gray-400 mt-1">{conv.issue}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      conv.status === 'active' ? 'bg-green-900 text-green-400' :
                      conv.status === 'resolved' ? 'bg-blue-900 text-blue-400' :
                      'bg-yellow-900 text-yellow-400'
                    }`}>
                      {conv.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{conv.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                onClick={() => handleActionClick('conversation')}
                className="w-full p-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-left transition"
              >
                <h3 className="font-semibold">Start New Conversation</h3>
                <p className="text-sm text-blue-200 mt-1">Begin a new customer interaction</p>
              </button>
              <button
                onClick={() => handleActionClick('analytics')}
                className="w-full p-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-left transition"
              >
                <h3 className="font-semibold">View Analytics</h3>
                <p className="text-sm text-purple-200 mt-1">Check performance metrics</p>
              </button>
              <button
                onClick={() => handleActionClick('knowledge')}
                className="w-full p-4 bg-green-600 hover:bg-green-700 rounded-lg text-left transition"
              >
                <h3 className="font-semibold">Knowledge Base</h3>
                <p className="text-sm text-green-200 mt-1">Browse help articles</p>
              </button>
              <button
                onClick={() => handleActionClick('settings')}
                className="w-full p-4 bg-gray-600 hover:bg-gray-700 rounded-lg text-left transition"
              >
                <h3 className="font-semibold">Settings</h3>
                <p className="text-sm text-gray-300 mt-1">Configure your preferences</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Conversation Modal */}
      {activeModal === 'conversation' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">New Conversation</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={newConversation.customerName}
                  onChange={(e) => setNewConversation({ ...newConversation, customerName: e.target.value })}
                  placeholder="Enter customer name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Issue Description
                </label>
                <textarea
                  value={newConversation.issue}
                  onChange={(e) => setNewConversation({ ...newConversation, issue: e.target.value })}
                  placeholder="Describe the issue"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleNewConversation}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Start Conversation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {activeModal === 'settings' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Settings</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-400">Settings configuration coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
