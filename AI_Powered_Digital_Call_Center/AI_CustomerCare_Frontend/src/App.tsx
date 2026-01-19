import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './components/chat/ChatInterface';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ChatInterface />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
