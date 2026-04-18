import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Network } from 'lucide-react';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import Markdown from 'react-markdown';
import { menuItems } from '../data/menuData';

// 1. Try process.env for AI Studio environment
// 2. Try import.meta.env for Netlify / Vite environment
// 3. Fallback to hardcoded key provided by user (ensure works in all scenarios)
const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY || "AIzaSyBh-uXlRtFPECUs6V5iyCiBAdRIYOETiSk";
const ai = new GoogleGenAI({ apiKey });

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', role: 'model', content: "Hello! I'm the Masala & Co. digital concierge. I can help recommend dishes, tell you about our restaurant, or guide your order. What are you craving today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatContext = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
      
      const menuContext = menuItems.map(item => 
        `Dish: ${item.name} (${item.category}, ₹${item.price})\n` +
        `Description: ${item.description}\n` +
        `Ingredients: ${item.ingredients.join(', ')}\n` +
        `Preparation: ${item.preparation}\n` +
        `Dietary: ${item.dietary.join(', ')}${item.isVegetarian ? '' : ''}\n`
      ).join('\n---\n');
      
      const systemInstruction = `You are the digital concierge for Masala & Co., a premium corporate restaurant. 
Be helpful, polite, and concise. Your goal is to provide excellent customer service, recommend dishes from the menu, and help users understand the restaurant.
Use the detailed ingredients and preparation methods to give personalized recommendations based on user taste preferences, dietary constraints, or restrictions. Provide thoughtful, tailored suggestions.
You should act as an intelligent assistant with high-level reasoning.
Here is the menu:

${menuContext}

Contacts: WhatsApp: +91 8305500767.
Location: Corporate Hub, Business District.
Keep answers relatively short and format nicely with markdown.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: `${systemInstruction}\n\nChat History:\n${chatContext}\n\nUser: ${userMessage.content}\nAssistant:`,
        config: {
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH
          }
        }
      });

      const text = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', content: text }]);
    } catch (error) {
      console.error("Error connecting to Gemini:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', content: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us on WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-zinc-900 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <Bot className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border border-zinc-900"></span>
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] sm:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-zinc-200 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-zinc-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-orange-400" />
              <h2 className="font-semibold">Masala & Co. AI</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="bg-zinc-100 text-xs px-4 py-2 flex items-center justify-center space-x-1 text-zinc-500 border-b border-zinc-200">
            <Network className="w-3 h-3" />
            <span>High reasoning enabled</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-zinc-900 text-white rounded-tr-sm' 
                    : 'bg-white text-zinc-800 border border-zinc-200 rounded-tl-sm shadow-sm'
                }`}>
                  {msg.role === 'model' ? (
                     <div className="text-sm text-zinc-800 leading-relaxed space-y-2 [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4">
                       <Markdown>{msg.content}</Markdown>
                     </div>
                  ) : (
                    <p className="text-sm">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-zinc-200 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our menu..."
                className="w-full bg-zinc-100 border-transparent rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-1.5 bg-zinc-900 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
