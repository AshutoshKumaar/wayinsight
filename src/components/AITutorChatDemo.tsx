"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Languages, User, Cpu } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const PRESET_QUESTIONS = {
  en: [
    { label: "Why does Earth orbit the Sun?", val: "Sir, why does the Earth orbit the Sun?" },
    { label: "What is photosynthesis?", val: "How do plants make food using photosynthesis?" },
    { label: "How does the heart pump blood?", val: "Explain how the human heart works." },
  ],
  hi: [
    { label: "पृथ्वी सूर्य की परिक्रमा क्यों करती है?", val: "सर, पृथ्वी सूर्य की परिक्रमा क्यों करती है?" },
    { label: "प्रकाश संश्लेषण क्या है?", val: "पौधे प्रकाश संश्लेषण द्वारा अपना भोजन कैसे बनाते हैं?" },
    { label: "हृदय रक्त को कैसे पंप करता है?", val: "मानव हृदय कैसे काम करता है, समझाइए।" },
  ],
};

const BOT_REPLIES = {
  en: {
    orbit: "Great question! 🌍 The Earth orbits the Sun because of gravity. The Sun is massive (about 330,000 times heavier than Earth!), creating a strong gravitational pull that bends the Earth's path. Combined with the Earth's forward momentum, this keeps us in a stable orbit. Think of it like a ball revolving on a string! ☀️",
    photosynthesis: "Photosynthesis is the process by which green plants make their own food! 🌱 Chlorophyll in plant cells captures sunlight, and combines it with carbon dioxide from the air and water from the soil. This creates glucose (energy) and releases oxygen into the atmosphere for us to breathe! 🍃",
    heart: "The human heart is a tireless double-pump! 🫀 The right side receives oxygen-depleted blood from the body and pumps it to your lungs to reload on oxygen. The left side receives this fresh, oxygenated blood from the lungs and pumps it with high pressure to the rest of your body! ⚡",
    default: "That's a fascinating question! 🚀 As your WayInsight AI Tutor, I'm synced with your VR/AR curriculum. I can help explain concepts in physics, chemistry, biology, or geography. Try asking about gravity, cells, the heart, or Mars!",
  },
  hi: {
    orbit: "बहुत अच्छा सवाल! 🌍 पृथ्वी सूर्य का चक्कर इसलिए लगाती है क्योंकि सूर्य का गुरुत्वाकर्षण बल बहुत अधिक है (यह पृथ्वी से लगभग 330,000 गुना भारी है!)। यह खिंचाव पृथ्वी को अपनी कक्षा में बाँधे रखता है। पृथ्वी की आगे की गति और सूर्य का गुरुत्वाकर्षण मिलकर इस निरंतर परिक्रमा को जन्म देते हैं। ☀️",
    photosynthesis: "प्रकाश संश्लेषण (Photosynthesis) वह प्रक्रिया है जिसके द्वारा हरे पौधे अपना भोजन स्वयं बनाते हैं! 🌱 पौधे की कोशिकाओं में मौजूद क्लोरोफिल सूर्य के प्रकाश को सोखता है, और इसे हवा से कार्बन डाइऑक्साइड और मिट्टी से पानी के साथ मिलाकर ग्लूकोज (ऊर्जा) बनाता है, और ऑक्सीजन छोड़ता है! 🍃",
    heart: "मानव हृदय एक शक्तिशाली दोहरा पंप (Double-pump) है! 🫀 हृदय का दायां हिस्सा शरीर से ऑक्सीजन-रहित रक्त प्राप्त करता है और उसे शुद्ध होने के लिए फेफड़ों में भेजता है। बायां हिस्सा फेफड़ों से ताज़ा ऑक्सीजन युक्त रक्त लेता है और उसे पूरे शरीर में पंप करता है! ⚡",
    default: "यह एक बहुत ही दिलचस्प प्रश्न है! 🚀 आपके वे-इनसाइट एआई ट्यूटर के रूप में, मैं आपकी कक्षा के पाठ्यक्रम से जुड़ा हुआ हूँ। मैं आपको विज्ञान, भूगोल और गणित के कठिन विषयों को आसानी से समझा सकता हूँ। गुरुत्वाकर्षण या प्रकाश संश्लेषण के बारे में पूछकर देखें!",
  },
};

export default function AITutorChatDemo() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "bot",
      text: lang === "en" 
        ? "Hello! I am your WayInsight AI Tutor. Ask me any question about what you experienced in your VR and AR lessons!"
        : "नमस्ते! मैं आपका वे-इनसाइट एआई ट्यूटर हूँ। अपने वीआर और एआर पाठों में आपने जो सीखा, उसके बारे में मुझसे कोई भी प्रश्न पूछें!",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync initial message on language switch
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === "initial") {
        return [
          {
            id: "initial",
            sender: "bot",
            text: lang === "en"
              ? "Hello! I am your WayInsight AI Tutor. Ask me any question about what you experienced in your VR and AR lessons!"
              : "नमस्ते! मैं आपका वे-इनसाइट एआई ट्यूटर हूँ। अपने वीआर और एआर पाठों में आपने जो सीखा, उसके बारे में मुझसे कोई भी प्रश्न पूछें!",
            timestamp: new Date(),
          },
        ];
      }
      return prev;
    });
  }, [lang]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking and replying
    setTimeout(() => {
      const query = textToSend.toLowerCase();
      let responseText = BOT_REPLIES[lang].default;

      if (query.includes("orbit") || query.includes("sun") || query.includes("परिक्रमा") || query.includes("सूर्य")) {
        responseText = BOT_REPLIES[lang].orbit;
      } else if (query.includes("photosynthesis") || query.includes("plant") || query.includes("प्रकाश संश्लेषण") || query.includes("पौध")) {
        responseText = BOT_REPLIES[lang].photosynthesis;
      } else if (query.includes("heart") || query.includes("pump") || query.includes("हृदय") || query.includes("पंप")) {
        responseText = BOT_REPLIES[lang].heart;
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-navy2/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
      {/* Header */}
      <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-white/5 select-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-ai-purple/15 flex items-center justify-center border border-ai-purple/30 text-ai-purple">
            <Cpu className="w-5 h-5 animate-pulse-slow" />
          </div>
          <div>
            <h5 className="font-display text-sm font-bold text-white leading-none flex items-center gap-1.5">
              WayInsight AI Tutor
              <Sparkles className="w-3.5 h-3.5 text-ai-purple fill-ai-purple/20" />
            </h5>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light animate-pulse"></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Online</span>
              <span className="text-[10px] font-mono bg-ai-purple/20 text-ai-purple border border-ai-purple/30 px-1.5 py-0.5 rounded ml-2 uppercase font-extrabold tracking-widest">
                Offline-First AI
              </span>
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-xs font-mono font-bold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
        >
          <Languages className="w-3.5 h-3.5 text-ai-purple" />
          {lang === "en" ? "English" : "हिंदी"}
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-navy2 to-slate-950 no-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 max-w-[85%] ${
              msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border select-none ${
                msg.sender === "user"
                  ? "bg-brand-green/10 border-brand-green/30 text-brand-green-light"
                  : "bg-ai-purple/10 border-ai-purple/30 text-ai-purple"
              }`}
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div
              className={`rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-brand-green text-white rounded-tr-none font-medium"
                  : "bg-slate-900 border border-white/5 text-slate-200 rounded-tl-none font-normal"
              }`}
            >
              <p>{msg.text}</p>
              <span
                className={`block text-[9px] font-mono mt-1.5 opacity-40 select-none ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="flex items-center gap-3 mr-auto max-w-[80%]"
            >
              <div className="w-8 h-8 rounded-lg bg-ai-purple/10 border border-ai-purple/30 text-ai-purple flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="bg-slate-900 border border-white/5 text-slate-400 rounded-2xl rounded-tl-none px-4 py-3.5 flex items-center gap-1 select-none">
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Recommended Prompt Pills */}
      <div className="bg-slate-950 px-6 py-2 flex gap-2 overflow-x-auto border-t border-white/5 select-none no-scrollbar shrink-0">
        {PRESET_QUESTIONS[lang].map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q.val)}
            disabled={isTyping}
            className="shrink-0 bg-white/5 hover:bg-white/10 text-[10px] md:text-xs font-mono font-medium text-slate-300 border border-white/10 hover:border-white/20 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputText);
        }}
        className="bg-slate-950 px-6 py-4 border-t border-white/5 flex gap-3 shrink-0"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isTyping}
          placeholder={
            lang === "en"
              ? "Type your curriculum question (e.g. What is gravity?)..."
              : "अपना प्रश्न टाइप करें (जैसे गुरुत्वाकर्षण क्या है?)..."
          }
          className="flex-1 bg-navy2/50 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-ai-purple focus:ring-1 focus:ring-ai-purple transition-all duration-200 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="bg-ai-purple hover:opacity-95 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl px-4.5 py-3 transition-all duration-200 flex items-center justify-center shadow-lg shadow-ai-purple/10 cursor-pointer disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
