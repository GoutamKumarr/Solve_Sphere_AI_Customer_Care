import React from 'react';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
          Analytics
        </h1>
        <p className="text-gray-400 mb-6">Insights and performance metrics will appear here.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold">Conversation Volume</h3>
            <p className="text-gray-400 text-sm mt-2">Coming soon...</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold">Satisfaction Trends</h3>
            <p className="text-gray-400 text-sm mt-2">Coming soon...</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold">Response Time</h3>
            <p className="text-gray-400 text-sm mt-2">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
