import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, BarChart3, Sparkles } from 'lucide-react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/chat') {
      return location.pathname === '/chat' || location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="sidebar-header">
          <Sparkles className="logo-icon" />
          <div>
            <h2>AI Customer Care</h2>
            <p>Spring AI Platform</p>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/chat"
              className={isActive('/chat') ? 'active' : ''}
            >
              <MessageSquare size={20} />
              <span>Chat Assistant</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={isActive('/dashboard') ? 'active' : ''}
            >
              <BarChart3 size={20} />
              <span>Analytics</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>System Online</span>
          </div>
        </div>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
