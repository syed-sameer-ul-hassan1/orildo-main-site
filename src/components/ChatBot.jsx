import React, { useState, useRef, useEffect } from 'react';
import { useSound } from '../context/SoundContext';

// Custom SVG Neural Core Icon Component (Visible in both Dark & Light modes)
const NeuralCoreSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="neural-svg-icon">
    <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" fill="currentColor" />
    <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="1.75" strokeDasharray="3 3" />
  </svg>
);

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Welcome to Orildo Neural Assistant. Powered by on-device local execution with zero tracking. How can I help you today?'
    }
  ]);

  const { playClick } = useSound();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpenChatBot = (e) => {
      setIsOpen(true);
      if (e.detail && e.detail.question) {
        handleSend(e.detail.question);
      }
    };

    window.addEventListener('open-chatbot', handleOpenChatBot);
    return () => window.removeEventListener('open-chatbot', handleOpenChatBot);
  }, []);

  // Intelligent Orildo Neural Knowledge Base
  const generateAIResponse = (userQuery) => {
    const query = userQuery.toLowerCase();

    if (query.includes('local-first') || query.includes('local first') || query.includes('what is local')) {
      return 'Local-first computing means your data is created, processed, and stored entirely on your local physical device first. Orildo applications function 100% offline without needing an active internet connection or third-party servers.';
    }
    if (query.includes('sync') || query.includes('p2p') || query.includes('peer')) {
      return 'Orildo uses peer-to-peer end-to-end encrypted zero-knowledge synchronization. Data is encrypted using AES-256-GCM on your device before transmission across local WiFi or encrypted relays.';
    }
    if (query.includes('mobile') || query.includes('ios') || query.includes('android')) {
      return 'Orildo Core Mobile is an ultra-fast local database engine for iOS and Android. It features zero tracking, zero telemetry, instant offline startup, and hardware Secure Enclave integration.';
    }
    if (query.includes('desktop') || query.includes('rust') || query.includes('workspace')) {
      return 'Orildo Workspace Desktop is a high-performance native desktop environment for macOS, Linux, and Windows, engineered with a Rust kernel and spatial keyboard navigation.';
    }
    if (query.includes('founder') || query.includes('sameer') || query.includes('who lead') || query.includes('who created')) {
      return 'Orildo Technology was founded and is led by Syed Sameer Ul Hassan, guided by the principle that digital privacy is a fundamental human right and luxury.';
    }
    if (query.includes('security') || query.includes('encryption') || query.includes('audit') || query.includes('aes')) {
      return 'Our security architecture incorporates hardware-level key isolation bound to Apple Silicon Secure Enclave and TPM 2.0 modules, protected by AES-256-GCM encryption and memory-safe Rust kernels.';
    }
    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
      return 'Hello! I am your Orildo Neural Assistant. Ask me anything about our products, privacy philosophy, or technical architecture.';
    }

    return `Thank you for asking about "${userQuery}". Orildo is built around data sovereignty, air-gapped performance, and zero cloud dependency. You can explore our products in the navigation bar or contact our team for deeper technical inquiries.`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    playClick();

    // Add User Message
    const userMessage = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const responseText = generateAIResponse(query);
      setMessages(prev => [...prev, { sender: 'ai', text: responseText }]);
      setIsTyping(false);
    }, 650);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickPrompts = [
    'What is Local-First?',
    'How does P2P sync work?',
    'Tell me about Mobile Engine',
    'Who founded Orildo?'
  ];

  return (
    <>
      {/* Distinct Floating Spatial Capsule Button */}
      <button
        className={`chatbot-spatial-capsule-btn ${isOpen ? 'open' : ''}`}
        onClick={() => {
          playClick();
          setIsOpen(prev => !prev);
        }}
        title="Orildo Neural AI Assistant"
        aria-label="Toggle Neural AI Assistant"
      >
        <div className="chatbot-capsule-content">
          <NeuralCoreSvg />
          <span className="chatbot-capsule-text">Neural AI</span>
          <span className="chatbot-live-pulse" />
        </div>
      </button>

      {/* Chatbot Card Window with Custom SVG Header */}
      {isOpen && (
        <div className="chatbot-card-window glass-panel distinct-chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <div className="chatbot-avatar-svg-wrap">
                <NeuralCoreSvg />
              </div>
              <div>
                <h4>Orildo Neural Assistant</h4>
                <div className="chatbot-status">
                  <span className="chatbot-online-dot" />
                  <span>On-Device • Air-Gapped Engine</span>
                </div>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <i className="ph ph-x" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="chatbot-messages-feed">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-message-row ${msg.sender === 'user' ? 'user-row' : 'ai-row'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="msg-avatar-svg">
                    <NeuralCoreSvg />
                  </div>
                )}
                <div className={`chatbot-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message-row ai-row">
                <div className="msg-avatar-svg">
                  <NeuralCoreSvg />
                </div>
                <div className="chatbot-bubble ai-bubble typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="chatbot-quick-chips">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="chatbot-chip"
                onClick={() => handleSend(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask Orildo Neural AI..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="chatbot-send-btn"
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              aria-label="Send Message"
            >
              <i className="ph ph-paper-plane-tilt" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
