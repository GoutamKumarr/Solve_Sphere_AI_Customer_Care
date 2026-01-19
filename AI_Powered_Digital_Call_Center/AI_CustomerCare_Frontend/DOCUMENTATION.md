# AI-Powered Digital Call Center - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Application Architecture](#application-architecture)
6. [Pages & Components](#pages--components)
7. [Installation & Setup](#installation--setup)
8. [Configuration](#configuration)
9. [Usage Guide](#usage-guide)
10. [API Integration](#api-integration)
11. [Styling & Theming](#styling--theming)
12. [State Management](#state-management)
13. [Development Guidelines](#development-guidelines)

---

## 🎯 Project Overview

**AI-Powered Digital Call Center** is a modern, intelligent customer care platform that leverages AI to provide automated customer support. The application features real-time chat capabilities, conversation management, analytics dashboard, and a comprehensive knowledge base.

### Key Objectives
- Provide 24/7 automated customer support
- Reduce response time and improve customer satisfaction
- Manage and track customer conversations efficiently
- Provide analytics and insights on support operations
- Maintain a searchable knowledge base for quick reference

---

## ✨ Features

### 1. **Authentication System**
- User login and signup functionality
- Session management with AuthContext
- Protected routes for authenticated users

### 2. **Dashboard**
- **Metrics Overview**:
  - Total Conversations: 1,245 (+12% from last week)
  - Customer Satisfaction: 94% (+5% improvement)
  - Average Response Time: 45s (-10% faster)
  - Active Chats: 23 (Real-time updates)
  
- **Recent Conversations**:
  - Live conversation list with status indicators (active, resolved, pending)
  - Customer names and issue descriptions
  - Timestamp for each conversation

- **Quick Actions**:
  - Start New Conversation
  - View Analytics
  - Knowledge Base Access
  - Settings Configuration

### 3. **Chat Interface**
- **Conversation Management**:
  - Create new conversations with customer name and issue description
  - Sidebar with searchable conversation list
  - Real-time message updates
  - Notification badges for unread messages

- **AI-Powered Chat**:
  - Automated AI responses
  - Natural language processing
  - Context-aware conversations
  - Message bubbles with timestamps

### 4. **Knowledge Base**
- **Policy Repository**:
  - Extracted company policies (TCS format)
  - Structured sections with clear categorization
  - Searchable and scannable content

- **Example Policies**:
  - Dividend Distribution Policy
  - Policy objectives and philosophy
  - Internal and external factors
  - Utilization of retained earnings
  - Compliance circumstances

### 5. **Analytics Dashboard**
- Performance metrics tracking
- Customer satisfaction trends
- Response time analysis
- Conversation statistics
- Data visualization

### 6. **Responsive Design**
- Mobile-friendly interface
- Dark mode support (default enabled)
- Modern UI with Tailwind CSS
- Smooth animations and transitions

---

## 🛠 Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Custom Components**: Avatar, Button, Card, Input, ScrollArea, Separator, Spinner

### State Management
- **React Context API** - AuthContext for authentication
- **React Hooks** - useState, useEffect for local state

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **jsconfig.json** - Path aliases configuration

---

## 📁 Project Structure

```
AI_CustomerCare_Frontend/
├── public/                          # Static assets
├── src/
│   ├── assets/                      # Images, icons, fonts
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatInterface.tsx    # Main chat component
│   │   │   └── ChatInterface.css    # Chat styles
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx        # Dashboard component
│   │   │   └── Dashboard.css        # Dashboard styles
│   │   ├── layout/
│   │   │   ├── Layout.tsx           # Main layout wrapper
│   │   │   └── Layout.css           # Layout styles
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── avatar.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── scroll-area.jsx
│   │   │   ├── separator.jsx
│   │   │   └── spinner.jsx
│   │   └── MessageBubble.jsx        # Chat message component
│   ├── context/
│   │   └── AuthContext.jsx          # Authentication context
│   ├── lib/
│   │   └── utils.js                 # Utility functions
│   ├── pages/
│   │   ├── LoginPage.jsx            # Login page
│   │   ├── LoginPage.css
│   │   ├── SignupPage.jsx           # Signup page
│   │   ├── Dashboard.jsx            # Dashboard page
│   │   ├── Dashboard.css
│   │   ├── Chat.jsx                 # Chat page
│   │   ├── ChatHome.jsx             # Chat home page
│   │   ├── Analytics.jsx            # Analytics page
│   │   ├── KnowledgeBase.jsx        # Knowledge base page
│   │   └── LandingPage.jsx          # Landing page
│   ├── services/
│   │   └── chat.service.js          # Chat API services
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # Global app styles
│   ├── App.tsx                      # TypeScript app entry
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global CSS styles
├── components.json                  # shadcn/ui config
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── jsconfig.json                    # JavaScript config
├── package.json                     # Dependencies
├── postcss.config.mjs               # PostCSS config
├── vite.config.js                   # Vite configuration
└── README.md                        # Project readme
```

---

## 🏗 Application Architecture

### Component Hierarchy

```
App (Router + AuthProvider)
├── LoginPage
├── SignupPage
├── Dashboard
│   ├── Metrics Cards
│   ├── Recent Conversations List
│   └── Quick Actions Panel
├── Chat
│   ├── Layout
│   │   ├── Sidebar (Conversations List)
│   │   └── ChatInterface
│   │       ├── MessageBubble (multiple)
│   │       └── Input Area
│   └── New Conversation Modal
├── ChatHome
├── Analytics
└── KnowledgeBase
    └── Policy Sections
```

### Data Flow

```
User Action → Component Event → Service Call → Backend API
                                      ↓
                                 Response
                                      ↓
                              State Update
                                      ↓
                              UI Re-render
```

### Routing Structure

```
/ (root)                    → LoginPage
/dashboard                  → Dashboard (protected)
/chat                       → Chat (protected)
/chat-home                  → ChatHome (protected)
/analytics                  → Analytics (protected)
/knowledge-base            → KnowledgeBase (protected)
/* (any other path)        → Redirect to /
```

---

## 📄 Pages & Components

### 1. **LoginPage** (`pages/LoginPage.jsx`)
- **Purpose**: User authentication entry point
- **Features**:
  - Email/username input
  - Password input
  - Login button
  - Link to signup page
  - Form validation
- **Styling**: Custom CSS with dark theme

### 2. **SignupPage** (`pages/SignupPage.jsx`)
- **Purpose**: New user registration
- **Features**:
  - User information collection
  - Password creation
  - Account creation
  - Redirect to login after signup

### 3. **Dashboard** (`pages/Dashboard.jsx`)
- **Purpose**: Main overview page after login
- **Sections**:
  - **Metrics Panel**:
    - Total Conversations card
    - Customer Satisfaction card
    - Average Response Time card
    - Active Chats card
  - **Recent Conversations**:
    - Scrollable list
    - Status badges (active/resolved/pending)
    - Customer names and issue types
    - Timestamps
  - **Quick Actions**:
    - Start New Conversation button
    - View Analytics button
    - Knowledge Base button
    - Settings button
  - **Header**:
    - Go to Chat button
    - Logout button

### 4. **Chat** (`pages/Chat.jsx`)
- **Purpose**: Real-time customer support interface
- **Components**:
  - **Sidebar**:
    - Add conversation button (+)
    - Search bar
    - Conversations list with badges
  - **Main Chat Area**:
    - Chat header with title
    - Message display area
    - AI assistant messages
    - Input field for typing
    - Send button
  - **New Conversation Modal**:
    - Customer Name input
    - Issue Description textarea
    - Start Conversation button

### 5. **ChatHome** (`pages/ChatHome.jsx`)
- **Purpose**: Chat landing page
- **Features**:
  - Welcome message
  - Quick access to chat features
  - Navigation options

### 6. **Analytics** (`pages/Analytics.jsx`)
- **Purpose**: Performance metrics and insights
- **Features**:
  - Conversation trends
  - Customer satisfaction charts
  - Response time analytics
  - Usage statistics
  - Export functionality

### 7. **KnowledgeBase** (`pages/KnowledgeBase.jsx`)
- **Purpose**: Policy and information repository
- **Structure**:
  - Header: "Knowledge Base – Extracted Policies (TCS)"
  - Subtitle: "Curated company policies with clear, scannable sections"
  - **Policy Sections**:
    - Dividend Distribution Policy
    - Policy Objective
    - Dividend Philosophy
    - Factors Considered (Internal/External)
    - Utilization of Retained Earnings
    - Circumstances for Non-Payment
  - Source attribution for each policy
- **Styling**: Dark theme with organized sections

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the Repository**
```bash
git clone <repository-url>
cd AI_CustomerCare_Frontend
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_WS_URL=ws://localhost:8080/ws
```

4. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

5. **Build for Production**
```bash
npm run build
# or
yarn build
```

6. **Preview Production Build**
```bash
npm run preview
# or
yarn preview
```

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)
```javascript
// Configured for React, path aliases, and build optimization
```

### ESLint Configuration (`eslint.config.js`)
```javascript
// Code quality and React best practices enforcement
```

### PostCSS Configuration (`postcss.config.mjs`)
```javascript
// Tailwind CSS and autoprefixer setup
```

### Path Aliases (`jsconfig.json`)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 📖 Usage Guide

### Starting a New Conversation

1. Navigate to the Dashboard
2. Click "Start New Conversation" in Quick Actions
3. Enter customer name in the modal
4. Describe the issue in the text area
5. Click "Start Conversation"
6. Begin chatting in the chat interface

### Managing Conversations

1. Go to the Chat page
2. Use the sidebar to view all conversations
3. Click on a conversation to open it
4. Unread messages show notification badges
5. Use the search bar to find specific conversations

### Accessing Knowledge Base

1. Click "Knowledge Base" from Dashboard Quick Actions
2. Browse through policy sections
3. Use Ctrl+F to search for specific information
4. Reference policies during customer conversations

### Viewing Analytics

1. Navigate to Analytics page
2. Review performance metrics
3. Analyze trends and patterns
4. Export reports as needed

---

## 🔌 API Integration

### Chat Service (`services/chat.service.js`)

The application integrates with a backend API for:
- User authentication
- Message sending and receiving
- Conversation management
- Real-time updates via WebSocket
- Knowledge base queries
- Analytics data retrieval

### Expected API Endpoints

```javascript
// Authentication
POST /api/auth/login
POST /api/auth/signup
POST /api/auth/logout

// Conversations
GET /api/conversations
POST /api/conversations
GET /api/conversations/:id
PUT /api/conversations/:id
DELETE /api/conversations/:id

// Messages
GET /api/conversations/:id/messages
POST /api/conversations/:id/messages

// Analytics
GET /api/analytics/metrics
GET /api/analytics/conversations
GET /api/analytics/satisfaction

// Knowledge Base
GET /api/knowledge-base
GET /api/knowledge-base/:id
POST /api/knowledge-base/search
```

---

## 🎨 Styling & Theming

### Color Scheme (Dark Mode)
- **Background**: Dark navy (#1a1f2e, #0f1419)
- **Cards**: Dark slate (#2a3140, #384152)
- **Primary**: Blue (#3b82f6, #2563eb)
- **Success**: Green (#22c55e)
- **Warning**: Orange/Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Text**: Light gray/white (#e5e7eb, #ffffff)

### Tailwind CSS Classes
- `dark` class toggles dark mode
- Utility-first approach for rapid styling
- Custom component classes in CSS modules

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔐 State Management

### AuthContext (`context/AuthContext.jsx`)

Provides authentication state across the application:

```javascript
{
  user: null | { id, name, email, role },
  isAuthenticated: boolean,
  login: (credentials) => Promise,
  logout: () => void,
  signup: (userData) => Promise
}
```

### Local State Management

Components use React hooks for local state:
- `useState` - Component state
- `useEffect` - Side effects and lifecycle
- `useContext` - Access to AuthContext

---

## 👨‍💻 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use TypeScript for type safety (where applicable)
- Follow ESLint rules

### Component Structure
```javascript
// Imports
import React, { useState, useEffect } from 'react';
import './Component.css';

// Component definition
function ComponentName({ prop1, prop2 }) {
  // State declarations
  const [state, setState] = useState(initialValue);
  
  // Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// Export
export default ComponentName;
```

### Best Practices
1. **Component Naming**: Use PascalCase
2. **File Organization**: Group related components
3. **CSS Modules**: Use component-specific styles
4. **Props Validation**: Use PropTypes or TypeScript
5. **Error Handling**: Implement error boundaries
6. **Performance**: Use React.memo for expensive components
7. **Accessibility**: Add ARIA labels and keyboard navigation
8. **Testing**: Write unit tests for critical components

### Git Workflow
1. Create feature branch from main
2. Make incremental commits
3. Write descriptive commit messages
4. Create pull request for review
5. Merge after approval

---

## 📊 Key Metrics & Performance

### Dashboard Metrics Explained

- **Total Conversations**: Cumulative count of all customer interactions
- **Customer Satisfaction**: Percentage based on post-conversation ratings
- **Average Response Time**: Mean time for AI to respond to customer messages
- **Active Chats**: Real-time count of ongoing conversations

### Performance Targets
- First response time: < 2 seconds
- AI response time: < 5 seconds
- Page load time: < 3 seconds
- Customer satisfaction: > 90%

---

## 🔧 Troubleshooting

### Common Issues

1. **Application won't start**
   - Verify Node.js installation
   - Delete `node_modules` and reinstall
   - Check for port conflicts

2. **API connection errors**
   - Verify backend is running
   - Check environment variables
   - Confirm CORS settings

3. **Dark mode not applying**
   - Check `darkMode` state in App.jsx
   - Verify Tailwind dark mode configuration
   - Clear browser cache

4. **Routing issues**
   - Verify React Router DOM installation
   - Check route definitions in App.jsx
   - Ensure proper navigation methods

---

## 📝 Future Enhancements

### Planned Features
- Multi-language support
- Voice chat integration
- Advanced analytics with charts
- Admin panel for user management
- Customer feedback system
- Integration with CRM systems
- Mobile app versions
- AI model improvements
- Chatbot customization
- Export conversation history

---

## 📞 Support & Contact

For issues, questions, or contributions:
- Open an issue on GitHub
- Contact the development team
- Check documentation updates
- Review FAQ section

---

## 📄 License

This project is part of the Spring AI YouTube Series. Please refer to the repository for license information.

---

## 🙏 Acknowledgments

- Built with React and Vite
- UI components from shadcn/ui
- Styling with Tailwind CSS
- AI integration with Spring AI framework
- Icons and design inspiration from modern UI trends

---

**Last Updated**: January 18, 2026

**Version**: 1.0.0

**Status**: Active Development
