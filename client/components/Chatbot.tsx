
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Cpu, ShieldCheck } from 'lucide-react';
import { askHelpdesk } from '../services/geminiService';
import { ChatMessage } from '../../types';
import { marked } from 'marked';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Halo! Saya **SignFlow Fast-Support**. Ada yang bisa saya bantu?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const botResponse = await askHelpdesk(input);
      setMessages(prev => [...prev, {
        role: 'model',
        text: botResponse,
        timestamp: new Date()
      }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: '**Error:** Gagal memproses bantuan.',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMarkdown = (text: string) => {
    // marked.parse returns a string in v12+
    const html = marked.parse(text);
    return { __html: html as string };
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-[420px] h-[600px] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.3)] rounded-[32px] flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-slate-950 text-white p-6 flex justify-between items-center bg-gradient-to-r from-slate-950 to-indigo-950">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 shadow-inner">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="font-black block text-sm tracking-widest uppercase italic leading-none mb-1">SignFlow <span className="text-cyan-400">Helpdesk</span></span>
                <span className="text-[9px] text-cyan-400/80 flex items-center gap-1.5 font-black tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span> Mode Respons Cepat
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2.5 rounded-full transition-all active:scale-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] p-4 rounded-3xl shadow-sm transition-all ${m.role === 'user'
                    ? 'bg-slate-950 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/60 rounded-tl-none font-medium'
                  }`}>
                  <div
                    className="markdown-content text-[13px] leading-[1.6]"
                    dangerouslySetInnerHTML={renderMarkdown(m.text)}
                  />
                  <span className={`text-[9px] mt-2.5 block opacity-40 font-black uppercase tracking-widest ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-3xl rounded-tl-none shadow-sm flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Mencari Manual...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-slate-100 bg-white">
            <div className="flex gap-3 items-center bg-slate-100/50 rounded-[24px] p-2 pl-5 border border-slate-200/60 focus-within:border-cyan-500/50 focus-within:ring-4 focus-within:ring-cyan-500/5 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya langkah penggunaan..."
                className="flex-1 bg-transparent border-none outline-none text-sm font-semibold placeholder:text-slate-400 py-2.5"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-slate-950 text-white p-3.5 rounded-2xl hover:bg-slate-800 disabled:opacity-20 transition-all active:scale-95 shadow-xl shadow-slate-200 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3.5 flex items-center justify-center gap-2 text-[9px] text-slate-400 font-black uppercase tracking-[0.1em]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
              AI Support Terverifikasi Manual SignFlow
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-950 text-white p-5 rounded-[28px] shadow-2xl hover:scale-105 transition-all group relative overflow-hidden active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
          <span className="absolute top-3 right-3 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-950 animate-pulse"></span>
        </button>
      )}
    </div>
  );
};
