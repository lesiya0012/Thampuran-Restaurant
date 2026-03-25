import { useState, useEffect, useRef } from "react";
import { ChefHat } from "lucide-react";
import { SiCodechef } from "react-icons/si";

export default function AssistantButton() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]); // store chat history
  const ref = useRef(null);
  const BASE_URL = import.meta.env.VITE_API_URL;

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const askAssistant = async () => {
    if (!question.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/assistant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      // Add new Q&A at the TOP of the feed
      setMessages((prev) => [
        { question, answer: data.answer },
        ...prev,
      ]);
      setQuestion("");
    } catch (err) {
      setMessages((prev) => [
        { question, answer: "Error: " + err.message },
        ...prev,
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref} className="fixed bottom-6 right-8 z-50">
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-amber-400 text-[#2b0c10] p-4 rounded-full shadow-lg hover:bg-amber-500 transition font-bold"
      >
         <SiCodechef size={45} /> 
      </button>

      {/* Assistant Panel */}
      {open && (
        <div className="mt-2 w-80 sm:w-96 bg-[#2b0c10] text-white rounded-lg shadow-xl p-4 border border-amber-400">
          <h2 className="text-lg font-serif font-bold mb-3 text-amber-400">
            Thampuran Assistant
          </h2>

          {/* Chat Feed */}
          <div className="max-h-64 overflow-y-auto flex flex-col-reverse mb-3">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-3">
                <p className="text-sm text-amber-300 font-semibold">
                  You: <span className="text-gray-200">{msg.question}</span>
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  🍴 {msg.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Input */}
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about our menu..."
            className="w-full border border-gray-600 rounded-md p-2 text-sm bg-[#2b0c10] text-white focus:outline-none focus:ring focus:ring-amber-400"
            onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      askAssistant();     // trigger send
    }
  }}

          />
          <button
            onClick={askAssistant}
            className="mt-2 w-full bg-amber-400 text-[#2b0c10] py-2 rounded-md hover:bg-amber-500 transition font-bold"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>
      )}
    </div>
  );
}