"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X, Languages, User, MessageSquare } from "lucide-react";

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
    orbit: "Great question! 🌍 The Earth orbits the Sun because of gravity. The Sun is massive (about 330,000 times heavier than Earth!), creating a strong gravitational pull that bends the Earth's path. Combined with the Earth's forward momentum, this keeps us in a stable orbit.☀️",
    photosynthesis: "Photosynthesis is the process by which green plants make their own food! 🌱 Chlorophyll in plant cells captures sunlight, and combines it with carbon dioxide from the air and water from the soil to create glucose (energy).🍃",
    heart: "The human heart is a tireless double-pump! 🫀 The right side receives oxygen-depleted blood from the body and pumps it to your lungs to reload on oxygen. The left side receives this fresh blood and pumps it to the rest of your body! ⚡",
    default: "That's a fascinating question! 🚀 As your WayInsight AI Tutor, I'm synced with your VR/AR curriculum. I can help explain concepts in physics, chemistry, biology, or geography. Try asking about gravity, cells, the heart, or Mars!",
  },
  hi: {
    orbit: "बहुत अच्छा सवाल! 🌍 पृथ्वी सूर्य का चक्कर इसलिए लगाती है क्योंकि सूर्य का गुरुत्वाकर्षण बल बहुत अधिक है (यह पृथ्वी से लगभग 330,000 गुना भारी है!)। यह खिंचाव पृथ्वी को अपनी कक्षा में बाँधे रखता है।☀️",
    photosynthesis: "प्रकाश संश्लेषण (Photosynthesis) वह प्रक्रिया है जिसके द्वारा हरे पौधे अपना भोजन स्वयं बनाते हैं! 🌱 पौधे की कोशिकाएं सूर्य के प्रकाश, कार्बन डाइऑक्साइड और पानी के उपयोग से ग्लूकोज (ऊर्जा) और ऑक्सीजन बनाती हैं। 🍃",
    heart: "मानव हृदय एक शक्तिशाली दोहरा पंप (Double-pump) है! 🫀 हृदय का दायां हिस्सा शरीर से ऑक्सीजन-रहित रक्त प्राप्त करता है और उसे फेफड़ों में भेजता है। बायां हिस्सा फेफड़ों से ताज़ा ऑक्सीजन युक्त रक्त लेता है और उसे पूरे शरीर में पंप करता है! ⚡",
    default: "यह एक बहुत ही दिलचस्प प्रश्न है! 🚀 आपके वे-इनसाइट एआई ट्यूटर के रूप में, मैं आपकी कक्षा के पाठ्यक्रम से जुड़ा हुआ हूँ। मैं आपको विज्ञान, भूगोल और गणित के कठिन विषयों को आसानी से समझा सकता हूँ। गुरुत्वाकर्षण या प्रकाश संश्लेषण के बारे में पूछकर देखें!",
  },
};

export default function AITutorFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [messages, isTyping, isOpen]);

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
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button (Purple/Teal Gradient) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-ai-purple to-secondary text-white font-bold text-sm rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 select-none cursor-pointer"
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5" />
              <span>Close</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 fill-white animate-pulse" />
              <span>AI Tutor</span>
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Box Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-[360px] h-[520px] max-h-[80vh] z-50 bg-white border border-light-grey rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans text-xs md:text-sm"
          >
            {/* Header */}
            <div className="bg-deep-navy text-white px-4 py-4 flex items-center justify-between shadow-md select-none shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-brand-green-light flex items-center justify-center">
                  <Sparkles className="w-4 h-4 fill-brand-green-light" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-white text-xs leading-none">
                    AI Tutor Assistant
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light animate-pulse" />
                    <span className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang(lang === "en" ? "hi" : "en")}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-[10px] font-mono font-bold flex items-center gap-1 transition-colors border border-white/5 cursor-pointer"
                  title="Switch Language"
                >
                  <Languages className="w-3 h-3" />
                  {lang === "en" ? "हिन्दी" : "English"}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 no-scrollbar">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 max-w-[85%] ${
                      isBot ? "self-start text-left" : "self-end flex-row-reverse text-right ml-auto"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border select-none ${
                        isBot 
                          ? "bg-white border-light-grey text-ai-purple" 
                          : "bg-ai-purple-tint border-ai-purple/10 text-ai-purple"
                      }`}
                    >
                      {isBot ? <Sparkles className="w-3.5 h-3.5 fill-ai-purple" /> : <User className="w-3.5 h-3.5" />}
                    </div>
                    <div className="space-y-1">
                      <div
                        className={`p-3 rounded-2xl shadow-sm text-xs leading-relaxed font-medium ${
                          isBot
                            ? "bg-white text-text-primary border border-light-grey rounded-tl-none"
                            : "bg-ai-purple text-white rounded-tr-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5 max-w-[80%] self-start text-left">
                  <div className="w-7 h-7 rounded-lg bg-white border border-light-grey text-ai-purple flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 fill-ai-purple" />
                  </div>
                  <div className="bg-white border border-light-grey rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-1 h-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-ai-purple animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-ai-purple animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-ai-purple animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions Suggestions */}
            <div className="px-4 py-2 border-t border-light-grey bg-white select-none shrink-0">
              <div className="flex flex-wrap gap-1.5 py-1 justify-start">
                {PRESET_QUESTIONS[lang].map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q.val)}
                    disabled={isTyping}
                    className="px-2.5 py-1.5 rounded-lg border border-light-grey hover:border-ai-purple/30 bg-slate-50 text-[10px] text-text-secondary hover:text-ai-purple font-medium transition-all cursor-pointer text-left line-clamp-1 disabled:opacity-50"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="p-3 border-t border-light-grey bg-white flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={lang === "en" ? "Ask AI Tutor about lessons..." : "एआई ट्यूटर से प्रश्न पूछें..."}
                disabled={isTyping}
                className="w-full bg-alt-bg border border-light-grey rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-ai-purple placeholder:text-slate-400 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="w-9 h-9 rounded-xl bg-ai-purple hover:bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-ai-purple/10 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
