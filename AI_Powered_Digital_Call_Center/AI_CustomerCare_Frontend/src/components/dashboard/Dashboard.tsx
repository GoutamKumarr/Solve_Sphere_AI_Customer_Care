import React, { useState, useEffect } from 'react';
import { MessageSquare, TrendingUp, Clock, Users, Activity, CheckCircle } from 'lucide-react';
import './Dashboard.css';

interface ChatMetrics {
  totalChats: number;
  averageResponseTime: number;
  activeUsers: number;
  satisfactionRate: number;
  resolvedIssues: number;
  uptime: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<ChatMetrics>({
    totalChats: 1247,
    averageResponseTime: 1.8,
    activeUsers: 42,
    satisfactionRate: 94.5,
    resolvedIssues: 1089,
    uptime: 99.9,
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/dashboard/metrics');
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
      // Using mock data on error
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Customer Care Analytics</h1>
        <p className="dashboard-subtitle">Real-time insights and performance metrics</p>
      </div>
      
      <div className="metrics-grid">
        <div className="metric-card purple">
          <div className="metric-icon">
            <MessageSquare size={24} />
          </div>
          <div className="metric-info">
            <div className="metric-label">Total Conversations</div>
            <div className="metric-value">{metrics.totalChats.toLocaleString()}</div>
            <div className="metric-change positive">+12.5% from last month</div>
          </div>
        </div>

        <div className="metric-card green">
          <div className="metric-icon">
            <Clock size={24} />
          </div>
          <div className="metric-info">
            <div className="metric-label">Avg Response Time</div>
            <div className="metric-value">{metrics.averageResponseTime}s</div>
            <div className="metric-change positive">-0.3s improvement</div>
          </div>
        </div>

        <div className="metric-card orange">
          <div className="metric-icon">
            <Users size={24} />
          </div>
          <div className="metric-info">
            <div className="metric-label">Active Users</div>
            <div className="metric-value">{metrics.activeUsers}</div>
            <div className="metric-change neutral">Currently online</div>
          </div>
        </div>

        <div className="metric-card red">
          <div className="metric-icon">
            <TrendingUp size={24} />
          </div>
          <div className="metric-info">
            <div className="metric-label">Satisfaction Rate</div>
            <div className="metric-value">{metrics.satisfactionRate}%</div>
            <div className="metric-change positive">+2.1% increase</div>
          </div>
        </div>

        <div className="metric-card blue">
          <div className="metric-icon">
            <CheckCircle size={24} />
          </div>
          <div className="metric-info">
            <div className="metric-label">Resolved Issues</div>
            <div className="metric-value">{metrics.resolvedIssues.toLocaleString()}</div>
            <div className="metric-change positive">87.3% resolution rate</div>
          </div>
        </div>

        <div className="metric-card teal">
          <div className="metric-icon">
            <Activity size={24} />
          </div>
          <div className="metric-info">
            <div className="metric-label">System Uptime</div>
            <div className="metric-value">{metrics.uptime}%</div>
            <div className="metric-change positive">Excellent performance</div>
          </div>
        </div>
      </div>

      <div className="dashboard-footer">
        <p>Data updated in real-time • Last refresh: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Dashboard;
