import { useState, useEffect, useRef } from "react";
import profilePic from "../images/shoyeb.jpg";

const suggestionsList = [
  "Show Resume 📄",
  "Projects 🔥",
  "Skills 🧠",
  "Experience 💼",
  "Achievements 🏆",
  "Hire Me 💬",
];

const quickQuestions = [
  "Shoyeb ka best project?",
  "Resume optimize tips?",
  "Interview guidance?",
  "Best skill to learn?",
  "Roadmap for Android?",
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: string; text: string; time: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const cleanMD = (t: string) => t.replace(/\*\*/g, "");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleOpen = () => {
    setOpen(true);
    setSuggestions(suggestionsList);
    if (messages.length === 0) {
      setMessages([
        {
          from: "bot",
          text:
            "Namaste bhai 👋, main Shoyeb AI hoon — aap mujhse coding, projects, resume, career ya Shoyeb ke baare mein kuch bhi pooch sakte ho.",
          time: getTime(),
        },
      ]);
    }
  };

  const sendMessage = async (text?: string) => {
    const content = text ?? input;
    if (!content.trim()) return;

    const userMsg = { from: "user", text: content, time: getTime() };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setSuggestions([]);
    setLoading(true);

    // Special button actions
    if (content === "Hire Me 💬") {
      window.open(
        "https://wa.me/917499601744?text=Hi Shoyeb, I visited your portfolio and want to discuss an opportunity.",
        "_blank"
      );
      setLoading(false);
      return;
    }

    if (content === "Show Resume 📄") {
      window.open("/Shoyeb_Resume.pdf", "_blank");
    }

    try {
      const res = await fetch("https://chatbot-lp3f.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg.text }),
      });
      const data = await res.json();
      const botMsg = { from: "bot", text: cleanMD(data.answer), time: getTime() };
      setMessages((p) => [...p, botMsg]);
      setSuggestions(suggestionsList);
    } catch {
      setMessages((p) => [
        ...p,
        {
          from: "bot",
          text: "⚠️ Server error — Shoyeb AI temporarily unavailable.",
          time: getTime(),
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {!open && (
        <div
          onClick={handleOpen}
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            zIndex: 10000,
            animation: "popButton .3s ease",
          }}
        >
          <span
            style={{
              background: "white",
              padding: "10px 18px",
              borderRadius: "20px",
              fontWeight: 600,
              fontSize: "14px",
              color: "black",
              boxShadow: "0 0 12px rgba(0,0,0,0.25)",
            }}
          >
            Chat with Shoyeb AI
          </span>
          <div
            style={{
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              boxShadow: "0 0 18px rgba(0,0,0,0.35)",
              color: "white",
            }}
          >
            🤖
          </div>
        </div>
      )}

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "32px",
            width: "395px",
            height: "540px",
            borderRadius: "18px",
            background: "#0d0d0d",
            boxShadow: "0 0 30px rgba(0,0,0,0.55)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 10000,
            animation: "popOpen .28s cubic-bezier(.18,.89,.32,1.28)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              padding: "12px 14px",
              fontWeight: 700,
              fontSize: "17px",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={profilePic}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid white",
                boxShadow: "0 0 8px rgba(255,255,255,0.4)",
              }}
            />
            Shoyeb AI
            <button
              onClick={() => setOpen(false)}
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                  background: msg.from === "user" ? "#0072ff" : "#222",
                  padding: "12px 14px",
                  borderRadius: msg.from === "user" ? "18px 18px 6px 18px" : "18px 18px 18px 6px",
                  maxWidth: "85%",
                  whiteSpace: "pre-wrap",
                  color: "white",
                  lineHeight: 1.45,
                  animation: "bubble .25s ease",
                  position: "relative",
                }}
              >
                {msg.from === "bot" && (
                  <img
                    src={profilePic}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      position: "absolute",
                      left: "-34px",
                      top: "4px",
                      border: "1px solid #0072ff",
                    }}
                  />
                )}
                {msg.text}
                <div
                  style={{
                    fontSize: "10px",
                    opacity: 0.65,
                    marginTop: "4px",
                    textAlign: msg.from === "user" ? "right" : "left",
                  }}
                >
                  {msg.time}
                </div>
              </div>
            ))}

            {loading && (
              <div
                style={{
                  background: "#222",
                  padding: "10px 14px",
                  borderRadius: "14px",
                  width: "90px",
                  color: "white",
                  animation: "bubble .25s ease",
                }}
              >
                Typing…
              </div>
            )}

            {/* 🔥 Auto-Suggest Buttons */}
            {suggestions.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "6px",
                }}
              >
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(sug)}
                    style={{
                      padding: "12px 18px",
                      background: "#151515",
                      color: "white",
                      borderRadius: "18px",
                      border: "1px solid #333",
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: ".25s",
                      boxShadow: "0 0 8px rgba(0,0,0,0.35)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1e1e1e")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#151515")}
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* 🔥 Quick Questions Under Input */}
          {open && (
            <div
              style={{
                display: "flex",
                gap: "6px",
                overflowX: "auto",
                padding: "6px 10px 0",
              }}
            >
              {quickQuestions.map((qq, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(qq)}
                  style={{
                    background: "#181818",
                    color: "white",
                    borderRadius: "12px",
                    border: "1px solid #333",
                    fontSize: "12px",
                    padding: "6px 10px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {qq}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "8px",
              alignItems: "center",
              background: "#0f0f0f",
              borderTop: "1px solid #222",
              gap: "8px",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything about Shoyeb..."
              style={{
                flex: 1,
                padding: "11px 14px",
                background: "#1a1a1a",
                borderRadius: "14px",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "14px",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              style={{
                background: "#0072ff",
                border: "none",
                borderRadius: "14px",
                padding: "10px 16px",
                color: "white",
                cursor: "pointer",
                fontSize: "19px",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popOpen {from {opacity:.2; transform:scale(.85);} to {opacity:1; transform:scale(1);} }
        @keyframes bubble {from {opacity:0; transform:translateY(8px);} to {opacity:1; transform:translateY(0);} }
        @keyframes popButton {from {transform:scale(.9);} to {transform:scale(1);} }
      `}</style>
    </>
  );
};

export default ChatWidget;
