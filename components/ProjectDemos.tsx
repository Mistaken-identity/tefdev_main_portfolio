import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Terminal, Send, Lock, Loader, Sparkles, RefreshCw } from 'lucide-react';

// --- Demo 1: Nebula Dashboard (Live Chart) ---
const NebulaDemo = () => {
  const [data, setData] = useState<{name: string, value: number, latency: number}[]>([]);

  useEffect(() => {
    // Initial data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      name: i.toString(),
      value: Math.floor(Math.random() * 1000) + 500,
      latency: Math.floor(Math.random() * 50) + 20
    }));
    setData(initialData);

    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          name: Date.now().toString().slice(-4),
          value: Math.floor(Math.random() * 1000) + 500,
          latency: Math.floor(Math.random() * 50) + 20
        });
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-nexus-success rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-nexus-success">LIVE_STREAM_ACTIVE</span>
        </div>
        <div className="text-xs font-mono text-gray-400">
          LATENCY: <span className="text-white">{data[data.length - 1]?.latency}ms</span>
        </div>
      </div>
      <div className="flex-1 min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" tick={false} stroke="#666" />
            <YAxis stroke="#666" tick={{fontSize: 10}} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#11111e', borderColor: '#333', color: '#fff' }}
              itemStyle={{ color: '#00f0ff' }}
            />
            <Area type="monotone" dataKey="value" stroke="#00f0ff" fillOpacity={1} fill="url(#colorValue)" isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Demo 2: Quantum CMS (AI Generator) ---
const QuantumDemo = () => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState('');

  const generate = () => {
    if (!topic) return;
    setIsGenerating(true);
    setContent('');
    
    // Simulate API delay and streaming
    setTimeout(() => {
      const mockContent = `Generating optimized content for "${topic}"...\n\nAnalyzing keywords... [Done]\nStructuring headers... [Done]\n\nDraft:\nIn the rapidly evolving landscape of ${topic}, integration is key. Modern architectures demand resilience. By leveraging distributed systems, we can achieve 99.99% uptime while maintaining developer velocity. The future of ${topic} relies on abstraction layers that simplify complexity without sacrificing power.`;
      
      let i = 0;
      const stream = setInterval(() => {
        setContent(mockContent.slice(0, i));
        i++;
        if (i > mockContent.length) {
          clearInterval(stream);
          setIsGenerating(false);
        }
      }, 30);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex gap-2">
        <input 
          type="text" 
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic (e.g., 'Serverless')" 
          className="flex-1 bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-nexus-secondary outline-none transition-colors"
        />
        <button 
          onClick={generate}
          disabled={isGenerating || !topic}
          className="bg-nexus-secondary/20 border border-nexus-secondary/50 text-nexus-secondary px-4 rounded hover:bg-nexus-secondary/30 disabled:opacity-50 transition-colors flex items-center gap-2"
        >
          {isGenerating ? <Loader size={16} className="animate-spin" /> : <Sparkles size={16} />}
          <span className="text-sm font-bold">Generate</span>
        </button>
      </div>
      <div className="flex-1 bg-black/20 rounded p-4 border border-white/5 font-mono text-sm text-gray-300 overflow-y-auto min-h-[150px] whitespace-pre-wrap">
        {content || <span className="text-gray-600 italic">// Generated content will appear here...</span>}
      </div>
    </div>
  );
};

// --- Demo 3: Void Terminal ---
const VoidDemo = () => {
  const [history, setHistory] = useState<string[]>(["Welcome to VOID v1.0", "Type 'help' for commands."]);
  const [cmd, setCmd] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const command = cmd.trim().toLowerCase();
      const newHistory = [...history, `user@void:~$ ${cmd}`];
      
      switch(command) {
        case 'help':
          newHistory.push("Available commands: help, clear, whoami, date, status");
          break;
        case 'whoami':
          newHistory.push("guest_user_42");
          break;
        case 'date':
          newHistory.push(new Date().toString());
          break;
        case 'clear':
          setHistory([]);
          setCmd('');
          return;
        case 'status':
          newHistory.push("System: ONLINE | CPU: 12% | MEM: 4GB");
          break;
        default:
          newHistory.push(`Command not found: ${command}`);
      }
      
      setHistory(newHistory);
      setCmd('');
    }
  };

  return (
    <div className="bg-black/80 border border-gray-700 rounded h-[250px] p-4 font-mono text-xs overflow-y-auto flex flex-col" onClick={() => document.getElementById('term-input')?.focus()}>
      {history.map((line, i) => (
        <div key={i} className={line.startsWith('user') ? 'text-nexus-success' : 'text-gray-300'}>{line}</div>
      ))}
      <div className="flex items-center gap-2 text-nexus-success mt-1">
        <span>user@void:~$</span>
        <input 
          id="term-input"
          type="text" 
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent outline-none border-none text-white caret-nexus-accent"
          autoFocus
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

// --- Demo 4: Echo Chat ---
const EchoDemo = () => {
  const [msgs, setMsgs] = useState<{id: number, text: string, sent: boolean}[]>([
    {id: 1, text: "Session key established.", sent: false}
  ]);
  const [txt, setTxt] = useState('');

  const send = () => {
    if (!txt) return;
    const newMsg = {id: Date.now(), text: txt, sent: true};
    setMsgs(prev => [...prev, newMsg]);
    setTxt('');

    setTimeout(() => {
      setMsgs(prev => [...prev, {id: Date.now()+1, text: "Message received. Encrypting log...", sent: false}]);
    }, 800);
  };

  return (
    <div className="h-[250px] flex flex-col bg-nexus-900/50 rounded border border-white/5 overflow-hidden">
      <div className="bg-nexus-800 p-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
           <Lock size={12} className="text-nexus-success" />
           <span>E2E_ENCRYPTED</span>
        </div>
        <button onClick={() => setMsgs([])}><RefreshCw size={12} className="text-gray-500 hover:text-white"/></button>
      </div>
      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {msgs.map(m => (
          <div key={m.id} className={`flex ${m.sent ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-2 rounded text-xs ${m.sent ? 'bg-nexus-accent/20 text-nexus-accent rounded-br-none' : 'bg-white/10 text-gray-300 rounded-bl-none'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 bg-black/20 flex gap-2">
        <input 
          value={txt} 
          onChange={e => setTxt(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          className="flex-1 bg-transparent border-b border-white/10 text-sm text-white px-2 outline-none focus:border-nexus-accent/50 transition-colors"
          placeholder="Type secret..." 
        />
        <button onClick={send} className="text-nexus-accent hover:text-white"><Send size={16}/></button>
      </div>
    </div>
  );
};

interface ProjectDemoProps {
  id: string;
}

const ProjectDemo: React.FC<ProjectDemoProps> = ({ id }) => {
  const demos: Record<string, React.ReactNode> = {
    nebula: <NebulaDemo />,
    quantum: <QuantumDemo />,
    void: <VoidDemo />,
    echo: <EchoDemo />
  };

  return (
    <div className="mt-4 border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
      <h4 className="text-xs font-bold text-nexus-accent mb-3 font-mono tracking-widest uppercase">
        // INTERACTIVE_PREVIEW_MODE
      </h4>
      <div className="bg-nexus-900/80 border border-nexus-accent/20 rounded-lg p-4 shadow-inner min-h-[250px]">
        {demos[id] || <div className="text-center text-gray-500 p-10">Demo module not found.</div>}
      </div>
    </div>
  );
};

export default ProjectDemo;
