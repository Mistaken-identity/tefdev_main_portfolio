import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, Terminal as TerminalIcon, Minimize2, Maximize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';
import { generateChatResponse } from '../services/geminiService';

const ChatConsole: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "System initialized. I am the digital construct of Antony. Ask me anything about my projects, stack, or availability.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isMinimized]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: m.text
    }));

    try {
      const responseText = await generateChatResponse(history, userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-50 glass-panel p-4 rounded-full text-nexus-accent hover:bg-nexus-accent/10 transition-all border-nexus-accent/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
      >
        <Cpu size={24} className="animate-pulse" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[90vw] md:w-[400px] h-[500px] glass-panel rounded-lg flex flex-col overflow-hidden border-nexus-accent/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="h-10 bg-nexus-800/80 border-b border-white/5 flex items-center justify-between px-4 select-none">
        <div className="flex items-center gap-2 text-nexus-accent text-sm font-mono font-bold">
          <TerminalIcon size={14} />
          <span>NEURAL_LINK_V2.0</span>
        </div>
        <div className="flex items-center gap-2">
           <button onClick={() => setIsMinimized(true)} className="text-gray-400 hover:text-white">
             <Minimize2 size={14} />
           </button>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm bg-nexus-900/50"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[85%] p-3 rounded-lg border ${
                msg.role === 'user' 
                  ? 'bg-nexus-accent/10 border-nexus-accent/30 text-nexus-accent' 
                  : 'bg-nexus-700/50 border-white/10 text-gray-300'
              }`}
            >
               {msg.role === 'model' ? (
                 <ReactMarkdown 
                    components={{
                      code({className, children, ...props}) {
                         return <code className={`${className} bg-black/30 px-1 py-0.5 rounded text-nexus-success`} {...props}>{children}</code>
                      }
                    }}
                 >
                   {msg.text}
                 </ReactMarkdown>
               ) : (
                 msg.text
               )}
            </div>
            <span className="text-[10px] text-gray-600 mt-1">
              {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </span>
          </div>
        ))}
        {isTyping && (
           <div className="flex items-start">
             <div className="bg-nexus-700/50 border border-white/10 p-3 rounded-lg flex gap-1">
               <span className="w-2 h-2 bg-nexus-accent rounded-full animate-bounce"></span>
               <span className="w-2 h-2 bg-nexus-accent rounded-full animate-bounce delay-100"></span>
               <span className="w-2 h-2 bg-nexus-accent rounded-full animate-bounce delay-200"></span>
             </div>
           </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 bg-nexus-800/80 border-t border-white/5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Initiate query..."
          className="flex-1 bg-black/20 border border-white/10 rounded px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-nexus-accent/50 placeholder-gray-600"
          autoFocus
        />
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          className="bg-nexus-accent/10 text-nexus-accent border border-nexus-accent/30 p-2 rounded hover:bg-nexus-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatConsole;