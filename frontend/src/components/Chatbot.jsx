import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

const Chatbot = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm the Briglia Hundley assistant. I can help you with information about our firm, attorneys, practice areas, and locations. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Practice Areas",
    "Our Attorneys", 
    "Office Location",
    "Service Areas",
    "Schedule Consultation"
  ];

  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Practice Areas
    if (message.includes('practice') || message.includes('areas') || message.includes('services')) {
      const practiceAreas = [...data.practiceAreas, "Accountants Liability and Securities Litigation"].slice(0, 7).map(area => typeof area === 'string' ? area : area.title).join(', ');
      return `We practice in these key areas: ${practiceAreas}. Would you like to know more about any specific practice area or schedule a consultation?`;
    }
    
    // Attorneys
    if (message.includes('attorney') || message.includes('lawyer') || message.includes('who')) {
      return `Our experienced legal team includes partners and associates specializing in various areas of law. We have 14+ attorneys with over 30 years of combined experience. Would you like to schedule a consultation to discuss your legal needs?`;
    }
    
    // Location & Contact
    if (message.includes('location') || message.includes('address') || message.includes('where') || message.includes('office')) {
      return `We're located at 1921 Gallows Road, Suite 900, Tysons Corner, VA 22182. You can call us at ${data.business.phone} or schedule a free consultation through our website.`;
    }
    
    // Hours
    if (message.includes('hours') || message.includes('open') || message.includes('time')) {
      return `Our office hours are Monday-Friday, 9:00 AM - 6:00 PM. For urgent matters or to schedule a consultation outside these hours, please call ${data.business.phone}.`;
    }
    
    // Service Areas
    if (message.includes('serve') || message.includes('area') || message.includes('virginia') || message.includes('fairfax') || message.includes('dc')) {
      return `We serve clients throughout Northern Virginia, including Fairfax County, Prince William County, Arlington County, Alexandria, McLean, Vienna, Falls Church, Herndon, Reston, and surrounding areas. We also handle cases in Washington, D.C. and Maryland.`;
    }
    
    // Securities/Accounting specific
    if (message.includes('sec') || message.includes('pcaob') || message.includes('accounting') || message.includes('securities') || message.includes('audit')) {
      return `Yes, we have extensive experience in Accountants Liability and Securities Litigation. We represent accounting professionals in SEC enforcement, PCAOB investigations, malpractice claims, and securities litigation. Our team includes former prosecutors and a former Assistant Director of the PCAOB's Division of Enforcement and Investigations. Would you like to schedule a consultation?`;
    }
    
    // Awards & Recognition
    if (message.includes('award') || message.includes('recognition') || message.includes('tier') || message.includes('ranking')) {
      return `We're proud to be a Tier 1 ranked law firm with 7 attorneys recognized in Best Lawyers® 2025. We've been delivering superior client service and innovative legal strategies since 1993.`;
    }
    
    // Consultation
    if (message.includes('consultation') || message.includes('schedule') || message.includes('appointment') || message.includes('meet')) {
      return `I'd be happy to help you schedule a free consultation! You can call us at ${data.business.phone} or click the "Schedule a Free Consultation" button on our website. What type of legal matter can we assist you with?`;
    }
    
    // Fees
    if (message.includes('fee') || message.includes('cost') || message.includes('price') || message.includes('charge')) {
      return `Our fees vary depending on the type and complexity of your case. We offer free initial consultations where we can discuss your specific situation and explain our fee structure. Would you like to schedule a consultation?`;
    }
    
    // Specific locations
    if (message.includes('alexandria') || message.includes('mclean') || message.includes('vienna') || message.includes('herndon') || message.includes('reston')) {
      return `Yes, we serve clients in that area! Our Tysons Corner office is centrally located to serve all of Northern Virginia. We handle cases throughout Fairfax County and surrounding jurisdictions.`;
    }
    
    // Default response
    return `I can help you with information about our practice areas, attorneys, location, service areas, and scheduling consultations. You can also call us directly at ${data.business.phone} or visit our Tysons Corner office. What specific information would you like to know?`;
  };

  const handleSendMessage = (messageText = inputText) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Add bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getResponse(messageText),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputText('');
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Briglia Hundley Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.type === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about our services..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;